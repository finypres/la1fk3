import 'react-toastify/dist/ReactToastify.min.css'
import {
  GoogleTagManager,
  GoogleTagManagerNoScript
} from './components/google-tags/GoogleTags'
import Notice from './components/notice/Notice'
import Footer from './components/template/footer/Footer'
import Header from './components/template/header/Header'
import WhatsAppButton from './components/whatsapp/WhatsAppButton'
import './globals.css'

export const metadata = {
  title: 'Finanzas y Préstamos | Hacemos realidad tus metas financieras',
  description:
    'En Finanzas y Préstamos entendemos que la vida está llena de desafíos que requieren recursos económicos. Nos enorgullece ofrecer soluciones financieras.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager
        TM_TRACKING_ID={process.env.NEXT_PUBLIC_TM_TRACKING_ID}
      />
      <body>
        <div className="alternative-font-7">
          <div className="body mt-0">
            <Notice />
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </div>
        </div>
        <GoogleTagManagerNoScript
          TM_TRACKING_ID={process.env.NEXT_PUBLIC_TM_TRACKING_ID}
        />
      </body>
    </html>
  )
}
