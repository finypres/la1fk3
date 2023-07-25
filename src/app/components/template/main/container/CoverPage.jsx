import FormMessage from '@/app/components/form/FormMessage'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverPage() {
  return (
    <div className="custom-wrapper-1 p-relative">
      <div className="container p-relative z-index-9">
        <div className="row justify-content-between align-items-center min-vh-100">
          <div
            className="col-xxl-5 text-center text-xxl-start custom-col-1 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={900}
          >
            <h3 className="text-12">
              Préstamos ágiles y confiables para impulsar tus proyectos
              <mark className="bg-transparent p-0 mark mark-gradient mark-gradient-primary">
                Financieros.
              </mark>
            </h3>
            <p className="text-4 line-height-5">
              ¡Descubre nuestras opciones de préstamos en línea, obtén el
              impulso que necesitas y haz realidad tus metas financieras hoy
              mismo!
            </p>
            <p className="line-height-4 text-color-primary text-2-3">
              Desde 2’000.000 en adelante. Plazo de hasta 72 meses y TAE del 2%
            </p>
            <Link
              href="#"
              className="btn btn-modern btn-secondary box-shadow-6 border-0 text-transform-none btn-dash mt-2 py-3 px-5"
            >
              Contáctenos
            </Link>
          </div>
          <div className="col-xxl-5 align-self-end pb-4">
            <div
              className="card border-radius bg-color-light border-0 box-shadow-1 mb-5 appear-animation"
              data-appear-animation="fadeIn"
              data-appear-animation-delay={700}
            >
              <div className="card-body p-5 m-2 text-center">
                {/* <h4 className="card-title mb-2 text-6">¡Solicita Ahora!</h4>
                <p className="card-text">
                  Contacta un asesor en este mismo momento.
                </p>
                <form
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
                            href="mailto:you@domain.com"
                            className="text-decoration-none text-2 text-dark text-color-hover-primary ws-nowrap font-weight-semi-bold"
                          >
                            mail@domain.com
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
      <div className="hero d-none d-lg-block text-center pt-5">
        <div
          className="pt-4 mt-2 z-index-8 p-relative appear-animation"
          data-appear-animation="fadeIn"
          data-appear-animation-delay={500}
        >
          <Image
            width={500}
            height={297}
            className="img-fluid mt-5"
            src="/img/demos/business-consulting-5/backgrounds/background-3.png"
            alt=""
          />
        </div>
        <div
          className="p-absolute custom-el-pos-1 d-none z-index-8 d-xl-block appear-animation"
          data-appear-animation="fadeIn"
          data-appear-animation-delay={500}
        >
          <div
            data-plugin-float-element=""
            data-plugin-options="{'startPos': 'bottom', 'speed': 1.8, 'transition': true, 'transitionDuration': 1000}"
          >
            <Image
              width={253}
              height={258}
              className="img-fluid"
              src="/img/demos/business-consulting-5/backgrounds/background-4.png"
              alt=""
            />
          </div>
        </div>
        <div
          className="p-absolute custom-el-pos-2 d-none z-index-8 d-xl-block appear-animation"
          data-appear-animation="fadeIn"
          data-appear-animation-delay={500}
        >
          <div
            data-plugin-float-element=""
            data-plugin-options="{'startPos': 'bottom', 'speed': 1.2, 'transition': true, 'transitionDuration': 1000}"
          >
            <Image
              width={175}
              height={243}
              className="img-fluid"
              src="/img/demos/business-consulting-5/backgrounds/background-5.png"
              alt=""
            />
          </div>
        </div>
        <div
          className="appear-animation"
          data-appear-animation="fadeIn"
          data-appear-animation-delay={200}
        >
          <div className="p-absolute z-index-6 top-0 right-0">
            <Image
              width={1100}
              height={770}
              src="/img/demos/business-consulting-5/svg/hero-bg-1.svg"
              alt=""
              data-icon=""
              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-quaternary'}"
            />
          </div>
          <div className="p-absolute z-index-5 top-0 right-0">
            <Image
              width={1100}
              height={770}
              src="/img/demos/business-consulting-5/svg/hero-bg-2.svg"
              alt=""
              data-icon=""
              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-tertiary'}"
            />
          </div>
          <div className="p-absolute z-index-4 top-0 right-0">
            <Image
              width={1100}
              height={770}
              src="/img/demos/business-consulting-5/svg/hero-bg-3.svg"
              alt=""
              data-icon=""
              data-plugin-options="{'onlySVG': true, 'extraClass': ''}"
            />
          </div>
          <div className="p-absolute z-index-3 top-0 right-0">
            <Image
              width={1100}
              height={770}
              src="/img/demos/business-consulting-5/svg/hero-bg-4.svg"
              alt=""
              data-icon=""
              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
            />
          </div>
          <div className="p-absolute z-index-2 top-0 right-0">
            <Image
              width={1100}
              height={770}
              src="/img/demos/business-consulting-5/svg/hero-bg-5.svg"
              alt=""
              data-icon=""
              data-plugin-options="{'onlySVG': true, 'extraClass': ''}"
            />
          </div>
          <div className="p-absolute z-index-1 top-0 right-0">
            <Image
              width={1100}
              height={770}
              src="/img/demos/business-consulting-5/svg/hero-bg-6.svg"
              alt=""
              data-icon=""
              data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-secondary'}"
            />
          </div>
        </div>
      </div>
      {/* <div
        className="marquee custom-marquee p-absolute"
        data-duration={120000}
        data-gap={10}
        data-duplicated="true"
        data-startvisible="true"
      >
        <p className="m-0 py-2 custom-outline-text-style-1">
          MARKETING BUSINESS CONSULTING
        </p>
      </div> */}
    </div>
  )
}
