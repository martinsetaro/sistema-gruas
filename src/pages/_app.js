import '../styles/globals.module.scss';
import '../styles/normalize.css'
import AppContext from '../components/AppContext.js';


export default function App({ Component, pageProps }) {
  return (
    <AppContext>
  <Component {...pageProps} />
  </AppContext>
  )
  
}
