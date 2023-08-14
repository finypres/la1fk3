import { LinkConversion } from '../google-tags/GoogleTags'
import styles from './../../styles.module.css'

export default function Notice() {
  return (
    <div
      className={`notice-top-bar p-relative z-index-1 ${styles['bg-secondary']}`}
    >
      <div className="container">
        <div className="row justify-content-center py-2">
          <div className="col-9 col-md-12 text-center">
            <p className="text-color-light mb-0 font-weight-semibold text-2">
              Línea WhatsApp inmediata.
              <LinkConversion
                REFLINK={process.env.NEXT_PUBLIC_WA_LINK}
                CNAME="btn btn-link text-decoration-none p-0 m-0 btn-dash ms-1 text-light"
                TEXT="Escribir Ahora!"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
