import globalcss from "./global.css"

export const metadata = {
  title: 'Dantá Kelly || Portfolio',
  description: 'Portfolio Website. Made by: Dantá Ke;;',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
