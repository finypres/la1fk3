import SvgFirst from '@/app/components/svg/SvgFirst'
import SvgSecond from '@/app/components/svg/SvgSecond'
import Link from 'next/link'

export default function InfoPage() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-around mt-5">
        <SvgFirst />
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
        <SvgSecond />
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <h3 className="mt-5 pt-4">Testimonios De Nuestros Clientes</h3>
        </div>
      </div>
    </div>
  )
}
