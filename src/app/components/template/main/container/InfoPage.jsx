import Image from 'next/image'
import Link from 'next/link'

export default function InfoPage() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-around mt-5">
        <div className="col-lg-5 text-end p-relative pt-5 max-width-custom-1">
          <div className="p-absolute right-0">
            <div
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 10.0, 'transition': true, 'transitionDuration': 1000}"
            >
              <Image
                width={370}
                height={351}
                src="/img/demos/business-consulting-5/svg/icon-bg-1.svg"
                alt=""
                data-icon=""
                data-plugin-options="{'onlySVG': true, 'extraClass': ''}"
              />
            </div>
          </div>
          <div
            data-plugin-float-element=""
            data-plugin-options="{'startPos': 'bottom', 'speed': 10.0, 'transition': true, 'transitionDuration': 1000}"
          >
            <Image
              width={276}
              height={250}
              src="/img/demos/business-consulting-5/svg/icon-1.svg"
              alt=""
              data-icon=""
              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary mt-5 pt-5'}"
            />
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-start">
          <h3 className="mt-5 pt-4">
            Créditos Rápidos: <br />
            Acceso Inmediato
          </h3>
          <p>
            Obtén financiamiento en línea. Préstamos flexibles y seguros.
            Solicita hoy y haz realidad tus proyectos. Aprovecha esta
            oportunidad única.
          </p>
          <Link
            href="#"
            className="btn btn-modern btn-primary box-shadow-6 border-0 text-transform-none btn-dash mt-2 py-3 px-5"
          >
            Saber Más
          </Link>
        </div>
      </div>
      <div className="row align-items-center justify-content-around mt-5">
        <div className="col-lg-4 text-center text-lg-start">
          <h3 className="mt-5 pt-4">
            Préstamos Online:
            <br />
            ¡Solicita Ahora!
          </h3>
          <p>
            Préstamos rápidos en línea. Dinero al instante para tus necesidades
            financieras. Respaldamos tus proyectos. Solicita ahora y mejora tu
            situación.
          </p>
          <Link
            href="#"
            className="btn btn-modern btn-secondary box-shadow-6 border-0 text-transform-none btn-dash mt-2 py-3 px-5"
          >
            Saber Más
          </Link>
        </div>
        <div className="col-lg-5 p-relative pt-5 max-width-custom-1">
          <div className="p-absolute left-0">
            <div
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 10.0, 'transition': true, 'transitionDuration': 1000}"
            >
              <Image
                width={370}
                height={351}
                src="/img/demos/business-consulting-5/svg/icon-bg-2.svg"
                alt=""
                data-icon=""
                data-plugin-options="{'onlySVG': true, 'extraClass': ''}"
              />
            </div>
          </div>
          <div
            data-plugin-float-element=""
            data-plugin-options="{'startPos': 'bottom', 'speed': 10.0, 'transition': true, 'transitionDuration': 1000}"
          >
            <Image
              width={276}
              height={250}
              src="/img/demos/business-consulting-5/svg/icon-2.svg"
              alt=""
              data-icon=""
              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-secondary mt-5 pt-5'}"
            />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <h3 className="mt-5 pt-4">Testimonios De Nuestros Clientes</h3>
        </div>
      </div>
    </div>
  )
}
