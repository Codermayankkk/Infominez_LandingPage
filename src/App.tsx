import "./App.css";
import AboutUs from "./components/AboutUs";
import ClientTestimonial from "./components/ClientTestimonial";
import GetStarted from "./components/GetStarted";
import Ready from "./components/Ready";
import ServiceOffering from "./components/ServiceOffering";
import TrustedClients from "./components/TrustedClients";

function App():any 
{
  return(
    <div className="App w-full">
    <GetStarted/>
    <ServiceOffering/>
    <AboutUs/>
    <ClientTestimonial/>
    <TrustedClients/>
    <Ready/>
    </div>
  )
}

export default App
