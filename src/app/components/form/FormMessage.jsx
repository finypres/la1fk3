'use client'

import { sendMail } from '@/app/api/send.email'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import styles from './../../styles.module.css'
import {
  ERROR_DESCRIPTION,
  ERROR_NAME,
  ERROR_PHONE
} from '@/app/constants/formConstant'

export default function FormMessage() {
  const router = useRouter()
  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name'),
      email: 'email@siteweb.com',
      phone: formData.get('phone'),
      description: formData.get('message')
    }
    sendMail(data)
      .then((response) => {
        toast.success('¡Ok, Mensaje Enviado!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      })
      .then((response) => router.push('thanks-you'))
      .catch((error) => {
        const textError = error.response.data.message

        if (textError.includes(ERROR_NAME)) {
          toast.error('Error, por favor valide el campo Nombre', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }

        if (textError.includes(ERROR_PHONE)) {
          toast.error('Error, por favor ingrese un teléfono valido', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }

        if (textError.includes(ERROR_DESCRIPTION)) {
          toast.error('Error, por favor valide el campo monto', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        }
      })
  }
  return (
    <>
      <h4 className="card-title mb-2 text-6">¡Solicítalo Ya!</h4>
      <p className="card-text">
        Completa el formulario y nos comunicamos contigo en minutos.
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="contact-form"
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
          <div className="form-group col text-start">
            <input
              type="text"
              defaultValue=""
              placeholder="Monto a Solicitar *"
              data-msg-required="Por favor ingrese un monto a Solicitar"
              maxLength={100}
              className="form-control text-2-5 p-3"
              name="message"
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
                className={`btn border-0 ${styles['btn-tertiary']} bg-hover-primary text-color-hover-light text-color-primary text-3-5 p-3`}
                data-loading-text="Enviando..."
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group col text-start">
            <div className="d-grid gap-2">
              <Link
                href="/aviso-de-privacidad"
                className="text-2 font-weight-semi-bold"
              >
                Aviso de Privacidad
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col pt-4">
            <div className="hstack gap-3">
              <div className="ms-auto">
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CORP}`}
                  className="text-decoration-none text-2 text-dark text-color-hover-primary ws-nowrap font-weight-semi-bold"
                >
                  <i className="icons icon-envelope text-4 p-relative top-5 me-2" />
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
        <ToastContainer />
      </form>
    </>
  )
}
