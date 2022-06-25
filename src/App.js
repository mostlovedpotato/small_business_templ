import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Support from './components/Support';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Services/>
      <About/>
      <Support/>
      <Pricing/>  
      <Footer/>
    </div>
  );
}

export default App;
