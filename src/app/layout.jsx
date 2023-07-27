import './globals.css'

import Header from './components/template/header/Header'
import Notice from './components/notice/Notice'
import Footer from './components/template/footer/Footer'
import WhatsappButton from './components/whatsapp/WhatsAppButton'

export const metadata = {
  title: 'Finanzas y Préstamos | Hacemos realidad tus metas financieras',
  description:
    'En Finanzas y Préstamos entendemos que la vida está llena de desafíos que requieren recursos económicos. Nos enorgullece ofrecer soluciones financieras.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="alternative-font-7">
          <div className="body mt-0">
            <Notice />
            <Header />
            {children}
            <Footer />
            <WhatsappButton />
          </div>
        </div>
      </body>
    </html>
  )
}
