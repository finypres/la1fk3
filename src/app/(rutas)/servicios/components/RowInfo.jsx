import Image from 'next/image'

export default function RowInfo() {
  return (
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
                <h4 className="text-4">{'"Tip Crediticio 3"'}</h4>
                <p className="text-2">
                  Utiliza el crédito responsablemente. Paga tus deudas a tiempo
                  para mantener un buen historial crediticio.
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
                <h4 className="text-4">{'"Tip Crediticio 4"'}</h4>
                <p className="text-2">
                  Evita adquirir más deudas de las que puedes manejar y utiliza
                  los préstamos para inversiones o situaciones de emergencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
