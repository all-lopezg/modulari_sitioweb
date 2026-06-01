import { Gothic_A1, Bebas_Neue, Frank_Ruhl_Libre } from "next/font/google";

export const gothic = Gothic_A1({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-gothic'
})

export const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bebas'
})

export const frank = Frank_Ruhl_Libre({
  subsets: ['latin'],
  weight: '900',
  variable: '--font-frank'
})