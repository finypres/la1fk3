import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Script from 'next/script'
import SectionThanks from './components/SectionThanks'


export default function page() {
  return (
    <div role="main" className="main">
      <Breadcrumbs site={'Gracias Por Elegirnos'} />
      <SectionThanks />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src="/js/theme.js" />
      <ScriptLoader src="/js/theme.js" />
      <ScriptLoader src="/js/theme.init.js" />
    </div>
  )
}
