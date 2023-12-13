import { Inter, Roboto, Poppins, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] })

export const roboto = Roboto({
    subsets: ['latin'],
    weight: '300'
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: '200'
})

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });