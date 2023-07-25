import Link from 'next/link'

export default function SectionApply() {
  return (
    <div className="container pt-4 pb-5 mb-5">
      <div className="row">
        <div className="col">
          <p className="font-weight-medium text-4-5 line-height-5">
            Para aplicar es fácil cumple con los siguientes requisititos,
            contacta un asesor en línea el te guiara en el proceso de aprobación
            de la forma más atenta y rápida posible. Utiliza únicamente nuestras
            líneas de atención y espera la aprobación en minutos.
          </p>
          <ul>
            <li>Fotocopia de la cédula al 150%.</li>
            <li>Únicamente para empleados carta laboral.</li>
            <li>Únicamente para independiente RUT o Cámara de Comercio.</li>
            <li>Comprobantes de pago 2 últimos meses.</li>
            <li>2 referencias familiares y personales.</li>
            <li>TAE – tasa de interés anual del 2.2%</li>
            <li>Plazo máximo de préstamo 72 meses.</li>
            <li>Estudio de crédito en 1 Hora!</li>
            <li>Aprobación inmediata posterior al estudio.</li>
            <li>Prestamos a partir de $2.000.000 en adelante.</li>
          </ul>
          <p className="text-3-5">
            Después de cumplir con los requisitos, realizaremos un breve estudio
            donde se determinará la viabilidad de aprobación del préstamo.
            Nuestro personal financiero al verificar dicha aprobación lo guiara
            en el menor tiempo para realizar el desembolso de su dinero y
            efectuar los correspondientes términos y plazos pactados. Gracias
            por elegirnos!
          </p>
          <p className="">Tasas de Intereses</p>
          <table className="tablaTasas">
            <thead>
              <tr>
                <th>Tasa de Credito</th>
                <th>Plazo</th>
                <th>E.A.</th>
                <th>M.V.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Montos entre $2.000.000 y $30.000.000</td>
                <td>de 12 a 72 meses</td>
                <td>26,4%</td>
                <td>2,2%</td>
              </tr>
              <tr>
                <td>Montos superiores a $30.000.000</td>
                <td>de 12 a 72 meses</td>
                <td>26,4%</td>
                <td>2,2%</td>
              </tr>
              <tr>
                <td>Segmento preferente tasas desde:*</td>
                <td>de 12 a 72 meses</td>
                <td>18,83%</td>
                <td>1,50%</td>
              </tr>
              <tr>
                <td>Segmento preferente tasas hasta:*</td>
                <td>de 12 a 72 meses</td>
                <td>26,4%</td>
                <td>2,2%</td>
              </tr>
              <tr>
                <td>Tasa de interes mora</td>
                <td />
                <td>26,4%</td>
                <td>2,2%</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p className="text-4-5">Ejemplo de Préstamo:</p>
          <p>
            Préstamo por el monto de $2.000.000 de pesos a un interés del 2.2%
            TAE a un plazo de 12 meses. El cliente tendrá cuotas mensuales de
            $210.667 y un pago total de $2.528.000 más intereses.
          </p>
          <p className="text-4-5">Ejemplo de Préstamo por $30.0000.000:</p>
          <p>
            Préstamo por el monto de $30.000.000 de pesos a un interés del 2.2%
            TAE a un plazo de 24 meses. El cliente tendrá cuotas mensuales de
            $3.820.000 y un pago total de $45.840.000 más intereses.
          </p>
          <p className="text-4-5">Ejemplo de Préstamo por $100.0000.000:</p>
          <p>
            Préstamo por el monto de $100.000.000 de pesos a un interés del 2.2%
            TAE a un plazo de 24 meses. El cliente tendrá cuotas mensuales de
            $10.533.334 y un pago total de $126.400.000 más intereses.
          </p>
          <p className="text-4-5">
            Formula: I = CP * ip * N
            <br />
            CP= Capital Préstado ip= Tasa de Interes N= Plazos en Meses
          </p>
          <Link
            href="/contactenos"
            className="btn btn-modern btn-secondary box-shadow-6 border-0 text-transform-none btn-dash mt-2 py-3 px-5"
          >
            Solicitar
          </Link>
        </div>
      </div>
    </div>
  )
}
