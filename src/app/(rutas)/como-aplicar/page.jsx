import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import Call from '@/app/components/call/Call'
import SectionApply from './components/SectionApply'

export default function page() {
  return (
    <div role="main" className="main">
      <Breadcrumbs site={'Como Aplicar'} />
      <SectionApply />
      <Call />
    </div>
  )
}
