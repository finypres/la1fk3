'use client'

import Link from 'next/link'
import Script from 'next/script'

const GTM = ({ TM_TRACKING_ID }) => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${TM_TRACKING_ID}`}
      />
      <Script
        id="GTMID"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${TM_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
          `
        }}
      />
    </>
  )
}

// GoogleTagManager Insert <head></head>
const GoogleTagManager = ({ TM_TRACKING_ID }) => {
  return (
    <Script
      id="GTM"
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${TM_TRACKING_ID}');
          `
      }}
    />
  )
}

// GoogleTagManagerNoScript Insert <body></body>
const GoogleTagManagerNoScript = ({ TM_TRACKING_ID }) => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${TM_TRACKING_ID}`}
        height={0}
        width={0}
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  )
}

// GoogleAnalytics Insert <head></head>
const GoogleAnalytics = ({ AW_TRACKING_ID }) => {
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
          `
        }}
      />
    </>
  )
}

// GoogleEvent Insert <head></head>
const GoogleEvent = ({ AW_TRACKING_ID, AW_EVENT_ID }) => {
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
}

// GoogleLinkConversion Insert <head></head>
const GoogleLinkConversion = ({ AW_TRACKING_ID, AW_LINK_CONVERSION_ID }) => {
  return (
    <>
      <Script
        id="GRC"
        dangerouslySetInnerHTML={{
          __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': '${AW_TRACKING_ID}/${AW_LINK_CONVERSION_ID}',
                'event_callback': callback
            });
            return false;
          }
          `
        }}
      />
    </>
  )
}

// LinkConversion Insert <body></body>
const LinkConversion = ({ REFLINK, CNAME, TEXT }) => {
  const handleClick = () => {
    if (!window.gtag_report_conversion) return
    return window.gtag_report_conversion(REFLINK)
  }
  return (
    <Link onClick={handleClick} href={REFLINK} className={CNAME}>
      {TEXT}
    </Link>
  )
}

export {
  GTM,
  GoogleTagManager,
  GoogleTagManagerNoScript,
  GoogleAnalytics,
  GoogleEvent,
  GoogleLinkConversion,
  LinkConversion
}
