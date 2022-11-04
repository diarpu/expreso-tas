import Footer from 'components/Footer'
import Hero from 'components/Hero'
import MainLayout from 'components/Layouts/MainLayout'
import Metas from 'components/Seo/Metas'
import Services from 'components/Services'
import Sucursales from 'components/Sucursales'
import Why from 'components/Why'

export default function Home() {
  return (
    <MainLayout>
      <Metas
        title="Expreso TAS | Transporte y Distribución"
        description="Expreso TAS transporta y distribuye encomiendas de largas distancias en la provincia de Buenos Aires y Rosario en 24hs"
      />
      <Hero />
      <Why />
      <Services />
      <Sucursales />
      <Footer />
    </MainLayout>
  )
}
