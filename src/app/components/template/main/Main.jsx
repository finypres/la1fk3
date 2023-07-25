import Awards from './container/Awards'
import CallToAction from './container/CallToAction'
import CoverPage from './container/CoverPage'
import InfoPage from './container/InfoPage'
import Message from './container/Message'
import Procedures from './container/Procedures'
import Testimonials from './container/Testimonials'

export default function Main() {
  return (
    <div role="main" className="main">
      <CoverPage />
      <InfoPage />
      <Testimonials/>
      <Procedures />
      <Awards />
      <CallToAction />
      <Message />
    </div>
  )
}
