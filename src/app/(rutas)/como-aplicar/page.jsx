import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import Call from '@/app/components/call/Call'
import SectionApply from './components/SectionApply'
import Script from 'next/script'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'

export default function page() {
  return (
    <div role="main" className="main">
      <Breadcrumbs site={'Como Aplicar'} />
      <SectionApply />
      <Call />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src="/js/theme.js" />
      <ScriptLoader src="/js/theme.js" />
      <ScriptLoader src="/js/theme.init.js" />
    </div>
  )
}
