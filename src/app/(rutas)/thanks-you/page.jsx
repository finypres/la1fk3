import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Script from 'next/script'
import SectionThanks from './components/SectionThanks'
import GoogleEvent from '@/app/components/google-tags/GoogleEvent'


export default function page() {
  return (
    <div role="main" className="main">
      <Breadcrumbs site={'Gracias Por Elegirnos'} />
      <SectionThanks />
      <GoogleEvent
        AW_TRACKING_ID={process.env.NEXT_PUBLIC_AW_TRACKING_ID}
        AW_EVENT_ID={process.env.NEXT_PUBLIC_AW_EVENT_ID}
      />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src="/js/theme.js" />
      <ScriptLoader src="/js/theme.js" />
      <ScriptLoader src="/js/theme.init.js" />
    </div>
  )
}
