import Script from 'next/script'
import 'react-toastify/dist/ReactToastify.min.css'
import Notice from './components/notice/Notice'
import Footer from './components/template/footer/Footer'
import Header from './components/template/header/Header'
import WhatsAppButton from './components/whatsapp/WhatsAppButton'
import './globals.css'
const GTM_ID = process.env.NEXT_PUBLIC_TM_TRACKING_ID

export const metadata = {
  title: 'Finanzas y Préstamos | Hacemos realidad tus metas financieras',
  description:
    'En Finanzas y Préstamos entendemos que la vida está llena de desafíos que requieren recursos económicos. Nos enorgullece ofrecer soluciones financieras.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`
          }}
        />
      </body>
    </html>
  )
}
