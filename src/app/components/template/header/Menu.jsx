import Link from 'next/link'
import { LinkConversion } from '../../google-tags/GoogleTags'

export default function Menu() {
  return (
    <div className="header-column justify-content-end">
      <div className="header-row">
        <div className="header-nav header-nav-line header-nav-bottom-line header-nav-bottom-line-effect-1">
          <div className="header-nav-main header-nav-main-text-capitalize header-nav-main-square header-nav-main-arrows header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
            <nav className="collapse">
              <ul className="nav nav-pills" id="mainNav">
                <li>
                  <Link href="/" className="nav-link active">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="nav-link">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/servicios">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/como-aplicar">
                    Como Aplicar
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/contactenos">
                    Contáctenos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ul className="header-extra-info d-none d-xxl-block mt-2 mx-3">
          <li className="d-none d-sm-inline-flex ms-0 font-weight-semibold">
            <div className="d-flex align-items-center">
              <i className="icons icon-phone text-8 text-color-primary me-2" />
              <LinkConversion
                REFLINK={`tel:+57${process.env.NEXT_PUBLIC_PHONE}`}
                CNAME="text-decoration-none text-3 text-dark text-color-hover-primary"
                TEXT={process.env.NEXT_PUBLIC_PHONE}
              />
            </div>
          </li>
        </ul>
        <LinkConversion 
          REFLINK={process.env.NEXT_PUBLIC_WA_LINK}
          CNAME="btn btn-modern btn-primary box-shadow-6 border-0 text-transform-none btn-dash ms-3 d-none d-xl-inline-block"
          TEXT="WhatsApp Ya!"
        />
        <button
          className="btn header-btn-collapse-nav"
          data-bs-toggle="collapse"
          data-bs-target=".header-nav-main nav"
        >
          <i className="fas fa-bars" />
        </button>
      </div>
    </div>
  )
}
