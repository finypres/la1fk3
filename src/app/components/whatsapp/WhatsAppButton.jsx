'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton () {
  return (
    <FloatingWhatsApp
      phoneNumber={`+57${process.env.NEXT_PUBLIC_PHONE_WS}`}
      accountName='Lucia Rodríguez'
      chatMessage={'¡Hola! 🤝 \n¿En qué podemos ayudarte?'}
      placeholder='Mensaje'
      avatar='/img/clients/client-6.jpg'
      statusMessage='Normalmente responde en 15 min'
      messageDelay={1}
      notification
      notificationDelay={20}
      notificationSound
    />
  )
}