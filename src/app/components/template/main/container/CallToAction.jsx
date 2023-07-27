import Link from 'next/link'

export default function CallToAction() {
  return (
    <section
      className="section section-default border-0 p-0"
      data-inviewport-style=""
      data-plugin-options="{'style': {'background-color': '#FFFFFF'}, 'styleIn': {'background-color': '#393159'}, 'styleOut': {'background-color': '#FFFFFF'}, 'classIn': 'inner-text-light', 'modTop': '-300px', 'modBottom': '-300px'}"
    >
      <div className="container">
        <div className="row justify-content-center min-vh-100 align-items-center">
          <div className="col-lg-4 text-center">
            <h3 className="text-color-light">
              Nos enfocamos en prestar el mejor servicio de préstamos en línea en Finanzas y Préstamos .com
            </h3>
            <p className="text-4 text-light line-height-4 opacity-6">
              ¡No espere más compruébelo por usted mismo!
            </p>
            <Link
              href="/contactenos"
              className="btn btn-modern btn-light text-color-primary text-3 box-shadow-6 border-0 text-transform-none btn-dash mt-2 py-3 px-5"
            >
              Solicitar Ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
