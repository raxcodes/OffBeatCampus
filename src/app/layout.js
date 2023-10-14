import Navbar from './components/Navbar';
import './globals.css';
import 'flowbite';


export const metadata = {
  title: 'Off Beat Campus',
  description: 'Community For Students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
