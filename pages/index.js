import Footer from 'components/Footer'
import Hero from 'components/Hero'
import MainLayout from 'components/Layouts/MainLayout'
import Services from 'components/Services'
import Sucursales from 'components/Sucursales'
import Why from 'components/Why'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Why />
      <Services />
      <Sucursales />
      <Footer />
    </MainLayout>
  )
}
