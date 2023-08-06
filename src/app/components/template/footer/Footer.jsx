import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="position-relative bg-transparent border-top-0"
    >
      <div className="container pt-5-5 pb-3">
        <div className="row gy-5">
          <div className="col-lg-4">
            <h4 className="text-color-dark font-weight-bold mb-3">
              FinanzasyPrestamos.com - ¡Hacemos realidad tus metas financieras!
            </h4>
            <ul className="social-icons social-icons-clean social-icons-medium">
              <li className="social-icons-instagram">
                <Link
                  href="http://www.instagram.com/"
                  target="blank"
                  title="Instagram"
                >
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li className="social-icons-twitter">
                <Link
                  href="http://www.twitter.com/"
                  target="blank"
                  title="Twitter"
                >
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li className="social-icons-facebook">
                <Link
                  href="http://www.facebook.com/"
                  target="blank"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="row mb-5-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h4 className="text-color-dark font-weight-bold mb-3">
                  Financiera
                </h4>
                <ul className="list list-unstyled columns-lg-2">
                  <li>
                    <Link
                      href="/"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nosotros"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/como-aplicar"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Como Aplicar
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contactenos"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Contáctenos
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h4 className="text-color-dark font-weight-bold mb-3">
                  Servicios
                </h4>
                <ul className="list list-unstyled columns-lg-2">
                  <li>
                    <Link
                      href="/servicios"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Crédito Libre Inversión
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Crédito Hipotecario
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Préstamo Vehicular
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Crédito Estudiantil
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-transparent pb-5">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col mt-4 mb-4">
              <p className="text-3 mb-0 opacity-6">
                FinanzasyPrestamos.com Tu aliado Financiero © 2023. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
