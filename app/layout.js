import { Inter,Great_Vibes} from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import BootstrapClient from './components/BootstrapClient';


const greatVibes = Great_Vibes({subsets: ['latin'],  weight: '400',display: 'swap',variable: '--font-great-vibes',})

const inter = Inter({ subsets: ['latin'],display: 'swap',variable: '--font-inter', })


export const metadata = {
  title: 'Bridal Jewellery - Bridal Wedding Jewellery Sets',
  description: 'Bridal Jewellery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${greatVibes.className} ${inter.className}`}>
        
        {children}
      <BootstrapClient/>
      </body>
    </html>
  )
}
