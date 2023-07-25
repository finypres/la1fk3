import Image from 'next/image'

export default function Awards() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col text-center">
          <h3>Pasos Para Aplicar</h3>
        </div>
      </div>
      <div className="row text-center mt-4">
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
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
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <Image
            width={70}
            height={73}
            src="/img/demos/business-consulting-5/icons/icon-4.png"
            className="img-fluid mb-3"
            alt=""
          />
          <h4 className="mb-1">Paso 2</h4>
          <p>Envía la documentación</p>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <Image
            width={70}
            height={73}
            src="/img/demos/business-consulting-5/icons/icon-5.png"
            className="img-fluid mb-3"
            alt=""
          />
          <h4 className="mb-1">Paso 3</h4>
          <p>En 1 Hora para aprobación</p>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <Image
            width={70}
            height={73}
            src="/img/demos/business-consulting-5/icons/icon-6.png"
            className="img-fluid mb-3"
            alt=""
          />
          <h4 className="mb-1">Paso 4</h4>
          <p>Desembolso inmediato</p>
        </div>
      </div>
    </div>
  )
}
