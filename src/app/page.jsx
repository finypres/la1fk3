import Script from 'next/script'
import Main from './components/template/main/Main'

export default function Home() {
  return (
    <>
      <Main />
      <Script src='/js/plugins/js/plugins.min.js' />
      {/* <Script src='/js/theme.js' /> */}
      {/* <ScriptLoader src='/js/theme.js' /> */}
      {/* <ScriptLoader src='/js/theme.init.js' /> */}
    </>
  )
}
