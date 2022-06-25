import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
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
    </div>
  );
}

export default App;
