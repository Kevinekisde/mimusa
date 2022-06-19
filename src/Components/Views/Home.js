
import { Container } from '../../Style/HomeStyle'
import AboutUs from '../Section/AboutUs'
import Artists from '../Section/Artists'
import Blog from '../Section/Blog'
import Footer from '../Section/Footer'
import Header from '../Section/Header'
import HomeSection from '../Section/HomeSection'
import Market from '../Section/Market'
import NuevosLanzaminetos from '../Section/NuevosLanzaminetos'
import Partners from '../Section/Partners'
import SecondMarket from '../Section/SecondMarket'
import SectionParticipa from '../Section/SectionParticipa'
import Navbar from '../Section/Navbar'


const Home = ({theme,setTheme}) => {
  return (
    <Container>
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Header></Header>
      <HomeSection></HomeSection>
      <NuevosLanzaminetos></NuevosLanzaminetos>
      <Market></Market>
      <Partners></Partners>
      <AboutUs></AboutUs>
      <Blog></Blog>
      <Artists></Artists>
      <SectionParticipa></SectionParticipa>
      <SecondMarket></SecondMarket>
      <Footer></Footer>
    </Container>
  )
}

export default Home