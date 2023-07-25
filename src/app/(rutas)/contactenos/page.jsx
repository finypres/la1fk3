import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import SectionForm from './components/SectionForm'
import SectionQuestions from './components/SectionQuestions'
import Script from 'next/script'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'

export default function page() {
  return (
    <div role="main" className="main">
      <Breadcrumbs site={'Contáctenos'} />
      <SectionForm />
      <SectionQuestions />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src="/js/theme.js" />
      <ScriptLoader src="/js/theme.js" />
      <ScriptLoader src="/js/theme.init.js" />
    </div>
  )
}
