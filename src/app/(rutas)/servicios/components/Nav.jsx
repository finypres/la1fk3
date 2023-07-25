export default function Nav() {
  return (
    <aside
      className="nav-secondary bg-light pt-2 pb-0"
      id="navSecondary"
      data-plugin-sticky=""
      data-plugin-options="{'minWidth': 991, 'padding': {'top': 0}}"
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tabs tabs-bottom tabs-center tabs-simple m-0">
              <ul className="nav nav-tabs nav-fill m-0">
                <li className="nav-item m-0">
                  <a
                    className="nav-link"
                    data-hash=""
                    data-hash-offset={0}
                    data-hash-offset-lg={100}
                    href="#first"
                  >
                    Libre Inversión
                  </a>
                </li>
                <li className="nav-item m-0">
                  <a
                    className="nav-link"
                    data-hash=""
                    data-hash-offset={0}
                    data-hash-offset-lg={100}
                    href="#second"
                  >
                    Crédito Hipotecario
                  </a>
                </li>
                <li className="nav-item m-0">
                  <a
                    className="nav-link"
                    data-hash=""
                    data-hash-offset={0}
                    data-hash-offset-lg={100}
                    href="#third"
                  >
                    Préstamo Vehicular
                  </a>
                </li>
                <li className="nav-item m-0">
                  <a
                    className="nav-link"
                    data-hash=""
                    data-hash-offset={0}
                    data-hash-offset-lg={100}
                    href="#forth"
                  >
                    Crédito Estudiantil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
