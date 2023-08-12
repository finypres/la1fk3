"use client"

import Script from "next/script"

export default function GoogleEvent({ AW_TRACKING_ID, AW_EVENT_ID }) {
  return (
    <>
      <Script 
        id="GE"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': '${AW_TRACKING_ID}/${AW_EVENT_ID}'})
          `
        }}
      />
    </>
  )
};
