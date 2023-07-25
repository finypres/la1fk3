import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import Call from '@/app/components/call/Call'
import Nav from './components/Nav'
import RowInfo from './components/RowInfo'
import Services from './components/Services'
import Script from 'next/script'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'

export default function page() {
  return (
    <div role="main" className="main">
      <Breadcrumbs site={'Servicios'} />
      <Nav />
      <div className='container pt-4 mb-5'>
        <Services />
        <div className="pt-5">
          <hr className="my-5" />
        </div>
        <RowInfo />
      </div>
      <Call />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </div>
  )
}
