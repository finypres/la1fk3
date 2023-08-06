import Image from 'next/image'
import Link from 'next/link'
import styles from './../../../../styles.module.css'

export default function Procedures() {
  return (
    <section className="section border-0 bg-quaternary p-relative my-5">
      <div
        className="parallax m-0 p-absolute top-0 left-0 w-100 h-100"
        data-plugin-parallax=""
        data-plugin-options="{'speed': 1.5, 'parallaxHeight': '100%', 'parallaxScale': true}"
        data-image-src="/img/demos/business-consulting-5/backgrounds/background-1.jpg"
        style={{ maxWidth: 700, maxHeight: 640 }}
      />
      <div className="container mt-5">
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <h3 className="my-5 ps-lg-5 ms-lg-4">
              Requisitos y
              <br />
              Ejemplos de Préstamo
            </h3>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className={`col-lg-11 ${styles["bg-color-light"]} border-radius`}>
            <div className="p-5 my-4">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <div className="tabs tabs-vertical tabs-right tabs-navigation tabs-navigation-simple tabs-navigation-custom">
                    <ul className="nav nav-tabs col-sm-3">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          href="#tabsNavigationVertSimple1"
                          data-bs-toggle="tab"
                        >
                          Requisitos Indispensables
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#tabsNavigationVertSimple2"
                          data-bs-toggle="tab"
                        >
                          Ejemplo de Préstamo
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div
                    className="tab-pane tab-pane-navigation active"
                    id="tabsNavigationVertSimple1"
                  >
                    <p>
                      Tenga en cuenta nuestros términos para adquirir un
                      préstamo con nosotros.
                    </p>
                    <ul>
                      <li>Fotocopia de la cédula al 150%.</li>
                      <li>Únicamente para empleados carta laboral.</li>
                      <li>
                        Únicamente para independiente RUT o Cámara de Comercio.
                      </li>
                      <li>Comprobantes de pago 2 últimos meses.</li>
                      <li>2 referencias familiares y personales.</li>
                      <li>TAE – tasa de interés anual del 2.2%</li>
                      <li>Plazo máximo de préstamo 72 meses.</li>
                      <li>Estudio de crédito en 1 Hora!</li>
                      <li>Aprobación inmediata posterior al estudio.</li>
                      <li>Prestamos a partir de $2.000.000 en adelante.</li>
                    </ul>
                    <p className="text-4-5">Ejemplo de Préstamo:</p>
                    <p>
                      Préstamo por el monto de $2.000.000 de pesos a un interés
                      del 2.2% TAE a un plazo de 12 meses. El cliente tendrá
                      cuotas mensuales de $210.667 y un pago total de $2.528.000
                      más intereses.
                    </p>
                    <Link
                      href="/como-aplicar"
                      className="btn btn-modern btn-secondary box-shadow-6 border-0 text-transform-none btn-dash mt-2 py-3 px-5"
                    >
                      Como Aplicar
                    </Link>
                  </div>
                  <div
                    className="tab-pane tab-pane-navigation"
                    id="tabsNavigationVertSimple2"
                  >
                    <p className="text-4-5">
                      Ejemplo de Préstamo por $30.0000.000:
                    </p>
                    <p>
                      Préstamo por el monto de $30.000.000 de pesos a un interés
                      del 2.2% TAE a un plazo de 24 meses. El cliente tendrá
                      cuotas mensuales de $3.820.000 y un pago total de
                      $45.840.000 más intereses.
                    </p>
                    <p className="text-4-5">
                      Ejemplo de Préstamo por $100.0000.000:
                    </p>
                    <p>
                      Préstamo por el monto de $100.000.000 de pesos a un
                      interés del 2.2% TAE a un plazo de 24 meses. El cliente
                      tendrá cuotas mensuales de $10.533.334 y un pago total de
                      $126.400.000 más intereses.
                    </p>
                    <p className="text-4-5">
                      Formula: I = CP * ip * N
                      <br />
                      CP= Capital Prestado ip= Tasa de Interés N= Plazos en
                      Meses
                    </p>
                    <Link
                      href="/como-aplicar"
                      className="btn btn-modern btn-secondary box-shadow-6 border-0 text-transform-none btn-dash mt-2 py-3 px-5"
                    >
                      Como Aplicar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end pt-5 pb-4">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image
                      width={146}
                      height={140}
                      src="/img/demos/business-consulting-5/icons/icon-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h4 className="text-4">“Tip Crediticio 1”</h4>
                    <p className="text-2">
                      Ahorra regularmente para un futuro seguro.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image
                      width={146}
                      height={140}
                      src="/img/demos/business-consulting-5/icons/icon-2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h4 className="text-4">“Tip Crediticio 2”</h4>
                    <p className="text-2">Paga tus deudas antes de invertir.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
