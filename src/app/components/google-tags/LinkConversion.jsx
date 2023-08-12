"use client";

import Link from "next/link";

export default function LinkConversion({ REFLINK, CNAME, TEXT }) {
  const handleClick = () => {
    if (!window.gtag_report_conversion) return;
    return window.gtag_report_conversion(REFLINK);
  };
  return (
    <Link onClick={handleClick} href={REFLINK} className={CNAME}>
      {TEXT}
    </Link>
  );
}
