"use client";

import Script from "next/script";

export default function GoogleLinkConversion({
  AW_TRACKING_ID,
  AW_LINK_CONVERSION_ID,
}) {
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
          `,
        }}
      />
    </>
  );
}
