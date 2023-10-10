import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Services from "./components/Services/Services"
import Sales from "./components/Sales/Sales"
import ContactUs from "./components/ContactUs/ContactUs"
import Portfolio from "./components/Portfolio/Portfolio"
import FAQ from "./components/FAQ/FAQ"
import './app.css'
import SocialLinks from "./components/SocialLinks/SocialLinks"
import ServicesSales from "./components/ServicesSales/ServicesSales"
import Clients from "./components/Testimonials/Testimonials"
import WhyUs from "./components/WhyUs/WhyUs"


function App() {
  return (
    <div className="App">
      <Header />
      <WhyUs />
      <Services />
      <Sales />
      <ContactUs />
      <Portfolio />
      <FAQ />
      <SocialLinks />
      <Clients />
      <ServicesSales />
    </div>)
}

export default App