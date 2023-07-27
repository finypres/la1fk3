import SvgSecond from "@/app/components/svg/SvgSecond";
import Image from "next/image";
import Link from "next/link";

export default function Sections() {
  return (
    <div className="container pt-4 pb-5 mb-5">
      <div className="row">
        <div className="col">
          <p className="font-weight-medium text-4-5 line-height-5">
            FinanzasyPrestamos.com, donde tus sueños están a un paso de hacerse
            realidad
          </p>
          <p className="text-3-5">
            FinanzasyPrestamos.com, entendemos que la vida está llena de
            oportunidades y desafíos que requieren recursos financieros
            adecuados. Por eso, nos enorgullece ofrecer una amplia gama de
            soluciones de crédito diseñadas para satisfacer tus necesidades y
            ayudarte a alcanzar tus metas.
          </p>
          <p className="font-weight-medium text-3-5 line-height-4">
            Por qué elegirnos
          </p>
          <p className="text-3-5">
            Experiencia y confianza: Con años de trayectoria en el mercado
            financiero, FinanzasyPrestamos.com ha ganado la confianza de miles
            de clientes satisfechos. Nuestra experiencia nos permite brindarte
            soluciones personalizadas y transparentes.
            <br />
            Proceso ágil y sencillo: Entendemos que tu tiempo es valioso. Por
            ello, hemos simplificado nuestros procesos para que puedas obtener
            tu crédito de forma rápida y sin complicaciones.
            <br />
            Asesoría personalizada: Nuestro equipo de expertos financieros está
            dispuesto a escucharte y entender tus necesidades para ofrecerte la
            mejor solución posible. Estamos aquí para guiarte en cada paso y
            aclarar cualquier duda que puedas tener.
            <br />
            Compromiso social y responsabilidad: En FinanzasyPrestamos.com, no
            solo nos preocupamos por tus finanzas, sino también por el bienestar
            de la comunidad. Participamos activamente en proyectos sociales y
            sostenibles para contribuir al desarrollo de nuestra sociedad.
          </p>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <Image
            width={696}
            height={522}
            src="/img/demos/business-consulting-5/generic/generic-1.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <Image
            width={696}
            height={522}
            src="/img/demos/business-consulting-5/generic/generic-2.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-lg-8 text-center text-lg-start">
          <h3 className="mt-5 pt-4">
            Cómo solicitar tu crédito en
            <br />
            Finanzas y Préstamos .com
          </h3>
          <p>
            Realiza el proceso de forma virtual a través de nuestro sitio web.
            Solo necesitarás presentar algunos documentos básicos y nuestro
            equipo estará encantado de guiarte en el proceso de solicitud.
          </p>
          <Link
            href="/contactenos"
            className="btn btn-modern btn-secondary box-shadow-6 border-0 text-transform-none btn-dash mt-2 py-3 px-5"
          >
            Saber Más
          </Link>
        </div>
        <SvgSecond />
      </div>
      <div className="row mt-5 py-5">
        <div className="col-lg-6">
          <p className="text-3-5">
            Nos enorgullece contar con clientes satisfechos que confían en
            nuestros servicios.
          </p>
          <div className="row text-center mt-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                width={70}
                height={73}
                src="/img/demos/business-consulting-5/icons/icon-3.png"
                className="img-fluid mb-3"
                alt=""
              />
              <h4 className="mb-1">Paso 1</h4>
              <p>Comunícate con un asesor</p>
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                width={77}
                height={64}
                src="/img/demos/business-consulting-5/icons/icon-4.png"
                className="img-fluid mb-3"
                alt=""
              />
              <h4 className="mb-1">Paso 2</h4>
              <p>Envía la documentación</p>
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                width={88}
                height={63}
                src="/img/demos/business-consulting-5/icons/icon-5.png"
                className="img-fluid mb-3"
                alt=""
              />
              <h4 className="mb-1">Paso 3</h4>
              <p>En 1 Hora para aprobación</p>
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                width={108}
                height={62}
                src="/img/demos/business-consulting-5/icons/icon-6.png"
                className="img-fluid mb-3"
                alt=""
              />
              <h4 className="mb-1">Paso 4</h4>
              <p>Desembolso inmediato</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="accordion accordion-modern-status accordion-modern-status-arrow"
            id="accordion200"
          >
            <div className="card card-default">
              <div
                className="card-header bg-transparent bg-hover-quaternary transition-2ms"
                id="collapse200HeadingOne"
              >
                <h4 className="card-title m-0">
                  <Link
                    href="#"
                    className="accordion-toggle bg-transparent border-0 text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse200One"
                    aria-expanded="false"
                    aria-controls="collapse200One"
                  >
                    1 - ¿Cuánto tiempo tarda en aprobarse un préstamo en línea?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse200One"
                className="collapse"
                aria-labelledby="collapse200HeadingOne"
                data-bs-parent="#accordion200"
              >
                <div className="card-body pb-0">
                  <p className="mb-0">
                    El tiempo de aprobación establecido es de 1 hora, pero este
                    puede variar según la información proporcionada. Procuramos
                    que todas nuestras aprobaciones sean rápidas, en cuestión de
                    minutos u horas, mientras que otros pueden tardar unos días
                    hábiles.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div
                className="card-header bg-transparent bg-hover-quaternary transition-2ms"
                id="collapse200HeadingTwo"
              >
                <h4 className="card-title m-0">
                  <Link
                    href="#"
                    className="accordion-toggle bg-transparent border-0 text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse200Two"
                    aria-expanded="false"
                    aria-controls="collapse200Two"
                  >
                    2 - ¿Cuáles son los costos asociados con los préstamos en
                    línea?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse200Two"
                className="collapse"
                aria-labelledby="collapse200HeadingTwo"
                data-bs-parent="#accordion200"
              >
                <div className="card-body pb-0">
                  <p className="mb-0">
                    Los costos asociados por la financiera son del 2.2% TAE, no
                    contamos con comisiones ni cargos adicionales. Toda esta
                    información es suministrada en nuestro portal web a nuestros
                    clientes para una total conciencia y satisfacción de
                    nuestros servicios.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div
                className="card-header bg-transparent bg-hover-quaternary transition-2ms"
                id="collapse200HeadingThree"
              >
                <h4 className="card-title m-0">
                  <Link
                    href="#"
                    className="accordion-toggle bg-transparent border-0 text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse200Three"
                    aria-expanded="false"
                    aria-controls="collapse200Three"
                  >
                    3 - ¿Qué sucede si no puedo pagar mi préstamo en línea a
                    tiempo?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse200Three"
                className="collapse"
                aria-labelledby="collapse200HeadingThree"
                data-bs-parent="#accordion200"
              >
                <div className="card-body pb-0">
                  <p className="mb-0">
                    Si no puedes pagar a tiempo, comunícate con un asesor lo
                    antes posible usando cualquiera de nuestras líneas de
                    servicio al cliente. Allí te podemos ofrecer opciones de
                    extensión o refinanciación, pero es fundamental que te
                    comuniques con nuestros asesores para evitar penalidades y
                    proteger tu historial crediticio.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div
                className="card-header bg-transparent bg-hover-quaternary transition-2ms"
                id="collapse200HeadingFour"
              >
                <h4 className="card-title m-0">
                  <Link
                    href="#"
                    className="accordion-toggle bg-transparent border-0 text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse200Four"
                    aria-expanded="false"
                    aria-controls="collapse200Four"
                  >
                    4 - ¿Necesito tener un buen historial crediticio para
                    obtener un préstamo en línea?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse200Four"
                className="collapse"
                aria-labelledby="collapse200HeadingFour"
                data-bs-parent="#accordion200"
              >
                <div className="card-body pb-0">
                  <p className="mb-0">
                    No todos los préstamos en línea requieren un buen historial
                    crediticio. Contamos con opciones para personas con diversos
                    perfiles crediticios. Es importante explorar diferentes
                    opciones para encontrar el préstamo que mejor se adapte a tu
                    situación.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div
                className="card-header bg-transparent bg-hover-quaternary transition-2ms"
                id="collapse200HeadingFive"
              >
                <h4 className="card-title m-0">
                  <Link
                    href="#"
                    className="accordion-toggle bg-transparent border-0 text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse200Five"
                    aria-expanded="false"
                    aria-controls="collapse200Five"
                  >
                    5 - ¿Es seguro solicitar un préstamo en línea?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse200Five"
                className="collapse"
                aria-labelledby="collapse1HeadingFive"
                data-bs-parent="#accordion200"
              >
                <div className="card-body pb-0">
                  <p className="mb-0">
                    Sí, nuestro servicio de préstamo en línea utiliza
                    tecnologías de seguridad y cifrado para proteger la
                    información del solicitante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
