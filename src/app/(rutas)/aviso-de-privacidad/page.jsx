import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Script from 'next/script'
import SectionPrivacy from './components/SectionPrivacy'

export default function page() {
  return (
    <div role="main" className="main">
      <Breadcrumbs site={'Aviso de Privacidad'} />
      <SectionPrivacy />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src="/js/theme.js" />
      <ScriptLoader src="/js/theme.js" />
      <ScriptLoader src="/js/theme.init.js" />
    </div>
  )
}
