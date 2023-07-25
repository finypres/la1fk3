import FormMessage from '@/app/components/form/FormMessage'
import Link from 'next/link'

export default function Message() {
  return (
    <section className="section bg-dark m-0 border-0">
      <div className="container py-5">
        <div className="row justify-content-between align-items-center py-5">
          <div className="col-lg-6 text-center text-lg-start py-5">
            <h3 className="mb-4 text-color-light">
              ¿Esta listo para transformar su vida financiera?
            </h3>
            <p className="text-4 text-light line-height-4 opacity-6 mb-4">
              Comunícate hoy con nuestros asesores altamente calificados y
              aplica para tu aprobación financiera en minutos. Pasa al siguiente
              nivel con nuestro sistema de préstamos en línea Premium y cumple
              tus sueños.
            </p>
            <i className="icons icon-phone text-8 text-color-primary me-2" />
            <Link

              href={`tel:+57${process.env.NEXT_PUBLIC_PHONE}`}
              className="text-decoration-none text-5 p-relative bottom-9 font-weight-semi-bold text-light text-color-hover-primary"
            >
              {process.env.NEXT_PUBLIC_PHONE}
            </Link>
          </div>
          <div className="col-lg-5 py-5">
            <div className="card border-radius bg-color-light border-0 box-shadow-3">
              <div className="card-body p-5 m-2 text-center">
                {/* <h4 className="card-title mb-2 text-6">Book Discovery Call!</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                {/* <form
                  className="contact-form"
                  action="php/contact-form.php"
                  method="POST"
                >
                  <div className="contact-form-success alert alert-success d-none mt-4">
                    <strong>Success!</strong> Your message has been sent to us.
                  </div>
                  <div className="contact-form-error alert alert-danger d-none mt-4">
                    <strong>Error!</strong> There was an error sending your
                    message.
                    <span className="mail-error-message text-1 d-block" />
                  </div>
                  <div className="row">
                    <div className="form-group col text-start">
                      <input
                        type="text"
                        defaultValue=""
                        placeholder="Your Name *"
                        data-msg-required="Please enter your name."
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
                        placeholder="Your Phone *"
                        data-msg-required="Please enter your phone"
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
                          defaultValue="Get Started"
                          className="btn border-0 btn-tertiary bg-hover-primary text-color-hover-light text-color-primary text-3-5 p-3"
                          data-loading-text="Loading..."
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
                            href="mailto:you@domain.com"
                            className="text-decoration-none text-2 text-dark text-color-hover-primary ws-nowrap font-weight-semi-bold"
                          >
                            porto@domain.com
                          </Link>
                        </div>
                        <div className="vr" />
                        <div className="me-auto">
                          <i className="icons icon-phone text-4 p-relative top-5 me-2" />
                          <Link
                            href="tel:+1234567890"
                            className="text-decoration-none text-2 text-dark text-color-hover-primary ws-nowrap font-weight-semi-bold"
                          >
                            888 123 4567
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form> */}
                <FormMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
