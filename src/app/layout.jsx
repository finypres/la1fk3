import 'react-toastify/dist/ReactToastify.min.css'
import Notice from './components/notice/Notice'
import Footer from './components/template/footer/Footer'
import Header from './components/template/header/Header'
import WhatsAppButton from './components/whatsapp/WhatsAppButton'
import './globals.css'
import {
  GoogleAnalytics,
  GoogleLinkConversion
} from './components/google-tags/GoogleTags'

export const metadata = {
  title: 'Finanzas y Préstamos | Hacemos realidad tus metas financieras',
  description:
    'En Finanzas y Préstamos entendemos que la vida está llena de desafíos que requieren recursos económicos. Nos enorgullece ofrecer soluciones financieras.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics
          AW_TRACKING_ID={process.env.NEXT_PUBLIC_AW_TRACKING_ID}
        />
        <GoogleLinkConversion
          AW_TRACKING_ID={process.env.NEXT_PUBLIC_AW_TRACKING_ID}
          AW_LINK_CONVERSION_ID={process.env.NEXT_PUBLIC_AW_LINK_WA_ID}
        />
        <div className="alternative-font-7">
          <div className="body mt-0">
            <Notice />
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </div>
        </div>
      </body>
    </html>
  )
}
