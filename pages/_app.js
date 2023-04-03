import { StateContext } from '@/components/Context/StateContext'
import DashBoardLayout from '@/components/DashBoard'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
      <StateContext>
        <DashBoardLayout>
          <Toaster />
          <Component {...pageProps} />
        </DashBoardLayout>
      </StateContext>
  )
}
