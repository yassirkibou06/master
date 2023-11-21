import NavBar from '@/components/NavBar'
import './globals.css'


export const metadata = {
  title: 'LoudBeats',
  description: 'Welcom To LoudBeats Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
