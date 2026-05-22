import { Frank_Ruhl_Libre, Gothic_A1, Bebas_Neue } from "next/font/google";

export const frank = Frank_Ruhl_Libre({
  subsets: ['latin'],
  weight: '900'
})

export const gothic = Gothic_A1({
  subsets: ['latin'],
  weight: '500',
  display: 'swap',
  variable: '--font-gothic'
})

export const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bebas'
})