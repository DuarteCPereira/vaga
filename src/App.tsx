import { Header } from './components/Header'
import { Steps } from './components/Steps'
import { Features } from './components/Features'
import { CustomSite } from './components/CustomSite'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Steps />
        <Features />
        <CustomSite />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
