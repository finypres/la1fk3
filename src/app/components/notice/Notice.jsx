export default function Notice() {
  return (
    <div className="notice-top-bar p-relative z-index-1 bg-secondary">
      <div className="container">
        <div className="row justify-content-center py-2">
          <div className="col-9 col-md-12 text-center">
            <p className="text-color-light mb-0 font-weight-semibold text-2">
              Línea WhatsApp inmediata.
              <a
                href={process.env.NEXT_PUBLIC_WA_LINK}
                className="btn btn-link text-decoration-none p-0 m-0 btn-dash ms-1 text-light"
              >
                Escribir Ahora!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
