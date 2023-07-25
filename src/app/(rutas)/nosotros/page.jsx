import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import Call from '@/app/components/call/Call'
import Script from 'next/script'
import Sections from './components/Sections'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'

export default function page() {
  return (
    <div role="main" className="main">
      <Breadcrumbs site={'Nosotros'} />
      <Sections />
      <Call />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </div>
  )
}
