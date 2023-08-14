import FormMessage from '@/app/components/form/FormMessage'
import { LinkConversion } from '@/app/components/google-tags/GoogleTags'

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
            <LinkConversion
              REFLINK={`tel:+57${process.env.NEXT_PUBLIC_PHONE}`}
              CNAME="text-decoration-none text-5 p-relative bottom-9 font-weight-semi-bold text-light text-color-hover-primary"
              TEXT={process.env.NEXT_PUBLIC_PHONE}
            />
          </div>
          <div className="col-lg-5 py-5">
            <div className="card border-radius bg-color-light border-0 box-shadow-3">
              <div className="card-body p-5 m-2 text-center">
                <FormMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
