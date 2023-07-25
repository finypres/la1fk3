import Image from 'next/image'
import Link from 'next/link'

export default function Top() {
  return (
    <div className="header-column">
      <div className="header-row">
        <div className="header-logo">
          <Link href="/">
            <Image
              src="/img/demos/business-consulting-5/logo.png"
              className="img-fluid"
              width={168}
              height={33}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
