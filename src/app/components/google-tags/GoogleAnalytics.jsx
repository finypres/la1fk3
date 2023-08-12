"use client";

import Script from "next/script";

export default function GoogleAnalytics({ AW_TRACKING_ID }) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_TRACKING_ID}`}
      />
      <Script
        id="GA"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${AW_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
}
