import { StateContext } from '@/components/Context/StateContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
      <StateContext>
        <Component {...pageProps} />
      </StateContext>
  )
}
