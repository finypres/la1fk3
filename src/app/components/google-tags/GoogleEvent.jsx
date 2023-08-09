'use client'

import Script from 'next/script'

const GoogleEvent = ({ GA_TRACKING_ID, GA_EVENT_ID }) => {
  return (
    <Script id="google-event" strategy="afterInteractive">
      {`
      gtag('event', 'conversion', {'send_to': '${GA_TRACKING_ID}/${GA_EVENT_ID}'});
      `}
    </Script>
  )
}

export default GoogleEvent
