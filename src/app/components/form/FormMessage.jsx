import Link from 'next/link'

export default function FormMessage() {
  return (
    <>
      <h4 className="card-title mb-2 text-6">¡Solicita Ahora!</h4>
      <p className="card-text">Contacta un asesor en este mismo momento.</p>
      <form
        className="contact-form"
        action="php/contact-form.php"
        method="POST"
      >
        <div className="contact-form-success alert alert-success d-none mt-4">
          <strong>Success!</strong> Your message has been sent to us.
        </div>
        <div className="contact-form-error alert alert-danger d-none mt-4">
          <strong>Error!</strong> There was an error sending your message.
          <span className="mail-error-message text-1 d-block" />
        </div>
        <div className="row">
          <div className="form-group col text-start">
            <input
              type="text"
              defaultValue=""
              placeholder="Tu Nombre *"
              data-msg-required="Por favor, escriba su nombre."
              maxLength={100}
              className="form-control text-2-5 p-3"
              name="name"
              required=""
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col text-start">
            <input
              type="text"
              defaultValue=""
              placeholder="Tu Número Celular *"
              data-msg-required="Por favor ingrese su teléfono"
              maxLength={100}
              className="form-control text-2-5 p-3"
              name="phone"
              required=""
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <div className="d-grid gap-2">
              <input
                type="submit"
                defaultValue="Enviar"
                className="btn border-0 btn-tertiary bg-hover-primary text-color-hover-light text-color-primary text-3-5 p-3"
                data-loading-text="Enviando..."
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col pt-4">
            <div className="hstack gap-3">
              <div className="ms-auto">
                <i className="icons icon-envelope text-4 p-relative top-5 me-2" />
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CORP}`}
                  className="text-decoration-none text-2 text-dark text-color-hover-primary ws-nowrap font-weight-semi-bold"
                >
                  {process.env.NEXT_PUBLIC_EMAIL_CORP}
                </Link>
              </div>
              <div className="vr" />
              <div className="me-auto">
                <i className="icons icon-phone text-4 p-relative top-5 me-2" />
                <Link
                  href={`tel:+57${process.env.NEXT_PUBLIC_PHONE}`}
                  className="text-decoration-none text-2 text-dark text-color-hover-primary ws-nowrap font-weight-semi-bold"
                >
                  {process.env.NEXT_PUBLIC_PHONE}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
