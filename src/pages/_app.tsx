import '../styles/global.css'
import {ChallengeContext, ChallengeProvider} from '../contexts/ChallengeContexts'
function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
