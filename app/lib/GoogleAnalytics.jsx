"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// IDs de Google (NEXT_PUBLIC_* = vars expuestas al bundle, seguras para cliente)
// - GT_ID:   Google tag unificado (formato GT-XXXXXXXX) — RECOMENDADO como tag principal
// - GA_ID:    Google Analytics 4 (formato G-XXXXXXXXXX) — OPCIONAL
// - GADS_ID:  Google Ads Conversion ID (formato AW-XXXXXXXXXX) — RECOMENDADO
//             Si esta configurado, se registra la conversion al enviar el formulario.
const GT_ID = process.env.NEXT_PUBLIC_GT_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const search = typeof window !== "undefined" ? window.location.search : "";

  // Track page views en cambios de ruta (SPA) despues de que gtag esta listo.
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && GA_ID) {
      window.gtag("config", GA_ID, {
        page_path: pathname + search,
      });
    }
  }, [pathname, search]);

  // No renderizar nada si no hay IDs configurados (entorno de dev sin tracking)
  if (!GT_ID && !GA_ID && !GADS_ID) return null;

  return (
    <>
      {/*
        ORDEN CRITICO (patron oficial de Google):
        1) stub de dataLayer + gtag primero  -> encola comandos aunque gtag.js aun no carga
        2) script externo gtag/js           -> procesa la cola y reemplaza el stub por la impl real
        3) config de GA / Ads               -> se encolan y el externo los envia
        Si el stub se define DESPUES del externo, pisa window.gtag y nada se envia.
      */}
      <Script id="gtag-dataLayer" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
        `}
      </Script>

      {/* El script externo gtag.js se carga con el primer ID disponible: el Google tag
          (GT-...) como principal, y si no existe, con GA4 o Ads. Si no hubiera ningun ID
          los comandos quedarian encolados en dataLayer y nunca se enviarian. */}
      {(GT_ID || GA_ID || GADS_ID) && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GT_ID || GA_ID || GADS_ID}`}
          strategy="afterInteractive"
        />
      )}

      <Script id="gtag-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          ${GT_ID ? `gtag('config', '${GT_ID}');` : ""}
          ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
          ${GADS_ID ? `gtag('config', '${GADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
