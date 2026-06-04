import { Gothic_A1, Bebas_Neue } from "next/font/google";

export const gothic = Gothic_A1({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-gothic',
  preload: false,
})

export const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-bebas'
})