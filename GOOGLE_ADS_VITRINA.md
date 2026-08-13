# Google Ads en la vitrina (modulari.ommi.cl) — Instrucciones de implementación

> Documento para un agente que trabajará sobre el proyecto de la **vitrina / catálogo de cotizaciones** (`https://modulari.ommi.cl/vitrina`), Next.js (App Router) desplegado en InsForge — el mismo stack que el sitio institucional `modulari.cl`.

## Contexto

- La vitrina es el **carrito donde los clientes envían sus cotizaciones**: es la conversión principal del negocio para Google Ads.
- El sitio institucional `modulari.cl` ya tiene su tag de Google Ads instalado (formulario de contacto). **No tocar ese proyecto.**
- La cuenta de Google Ads entrega un único **Conversion ID** (`AW-XXXXXXXXXX`) y un **Conversion label por acción** (el de la cotización es distinto al del formulario del sitio).
- Los valores `AW-...` y el label **no son secretos** (viajan públicos en el HTML); las variables `NEXT_PUBLIC_*` son la convención estándar.

## Valores a completar (placeholders)

Reemplazar antes de desplegar:

| Variable | Ejemplo | Origen |
|---|---|---|
| `NEXT_PUBLIC_GADS_ID` | `AW-16537304517` | Consola Google Ads → Conversiones (Conversion ID — común al sitio institucional y la vitrina) |
| `NEXT_PUBLIC_GADS_CONVERSION_LABEL` | *(pendiente de crear)* | Consola Google Ads → conversión de la **cotización de la vitrina** (label distinto al del formulario del sitio) |

> **Estado real al 13/08/2026**: el Conversion ID de la cuenta es `AW-16537304517` (ya usado en el sitio institucional con el label del formulario `uP3wCNXhk-EcEMX7zM09`). Para la vitrina falta crear la segunda conversión en Google Ads y obtener su label antes de completar este documento.

## Tareas

### 1. Crear el componente del tag (`app/lib/GoogleAds.jsx`)

Código listo para copiar (mismo patrón oficial de Google que el sitio institucional, con la corrección de cargar el script si hay Ads aunque no haya GA4):

```jsx
"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

// ID de Google Ads (NEXT_PUBLIC_* = vars expuestas al bundle, seguras para cliente).
// Si no está configurado, el componente no renderiza nada (dev sin tracking).
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

export default function GoogleAds() {
  const pathname = usePathname();
  const search = typeof window !== "undefined" ? window.location.search : "";

  // Re-llama config en cambios de ruta (SPA) para que Ads reciba cada page view.
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && GADS_ID) {
      window.gtag("config", GADS_ID, {
        page_path: pathname + search,
      });
    }
  }, [pathname, search]);

  if (!GADS_ID) return null;

  return (
    <>
      {/* ORDEN CRITICO (patron oficial de Google):
          1) stub de dataLayer + gtag primero  -> encola comandos aunque gtag.js aun no cargue
          2) script externo gtag/js           -> procesa la cola
          3) config de Ads                    -> se encola y el externo lo envia */}
      <Script id="gtag-dataLayer" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
        strategy="afterInteractive"
      />

      <Script id="gtag-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GADS_ID}');
        `}
      </Script>
    </>
  );
}
```

> Nota: si el proyecto no tiene `app/lib/`, crear la carpeta; si ya existe una carpeta de utilidades equivalente, respetar la convención del proyecto.

Incluirlo en el layout raíz (`app/layout.jsx`), justo antes del cierre de `<body>`:

```jsx
import GoogleAds from "@/app/lib/GoogleAds";
// ...
<GoogleAds />
```

### 2. Disparar la conversión al enviar la cotización

Buscar el **handler del envío exitoso de la cotización** (el carrito): el lugar donde la app confirma que el pedido/cotización se registró (ej. respuesta `OK` del servidor o la API de cotizaciones).

Inmediatamente después de confirmar el éxito (NO en validaciones fallidas ni errores), disparar:

```js
if (typeof window !== "undefined" && window.gtag) {
  window.gtag("event", "conversion", {
    send_to: `${process.env.NEXT_PUBLIC_GADS_ID}/${process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL}`,
    event_callback: () => {},
  });
}
```

Requisitos:

- **Disparar una sola vez por cotización**: si el envío puede repetirse en la misma sesión (ej. reintentos o doble submit), proteger con un flag/estado (`if (yaDisparado) return; yaDisparado = true;`) o disparar solo cuando la respuesta del servidor sea exitosa (que es lo normal).
- **No disparar en vistas previas, cambios de formulario ni intentos fallidos.**
- Si el proyecto usa variables de entorno, definir `NEXT_PUBLIC_GADS_ID` y `NEXT_PUBLIC_GADS_CONVERSION_LABEL` en `.env.local` (y `.env.example`); si es HTML/JS estático, usar constantes con los valores reales.

### 3. Variables de entorno y CI

- `.env.local`: agregar las dos variables con los valores reales.
- `.env.example`: agregarlas documentadas (sin valores).
- Si el deploy se hace por CI (GitHub Actions, como el sitio institucional), agregar al workflow:

```yaml
env:
  NEXT_PUBLIC_GADS_ID: ${{ secrets.NEXT_PUBLIC_GADS_ID }}
  NEXT_PUBLIC_GADS_CONVERSION_LABEL: ${{ secrets.NEXT_PUBLIC_GADS_CONVERSION_LABEL }}
```

y crear esos secrets en GitHub → Settings → Secrets and variables → Actions. Si aún no existen, el build no debe fallar (las variables quedan vacías y el componente no renderiza nada).

### 4. Verificación (antes de dar por terminado)

1. `npm run build` local sin errores.
2. Probar local: abrir la vitrina y revisar en DevTools (Network) que se cargue `googletagmanager.com/gtag/js?id=AW-...`.
3. Enviar una cotización de prueba y verificar que aparece la petición a `google.com/pagead/conversion/` (o `googleadservices.com`) con el label correcto.
4. Deploy y verificación final en producción con la extensión **Google Tag Assistant** o **Herramientas → Diagnóstico de etiquetas** en Google Ads (URL `https://modulari.ommi.cl/vitrina`).
5. En Google Ads, la conversión puede tardar hasta unas horas en reportar; **no asumir que falla si no aparece de inmediato** — revisar el diagnóstico de etiquetas.

## Notas finales

- El **Conversion ID es el mismo** de la cuenta (`AW-...`), igual que en el sitio institucional; el **label es distinto** (uno por acción de conversión).
- No instalar Google Analytics 4 salvo que se pida explícitamente (la tarea es solo conversión de Ads).
- Los comentarios y mensajes de log del código deben escribirse en **español** (convención del proyecto).
