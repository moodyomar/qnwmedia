import './App.css';
import { Navbar } from "./Components"
import { Hero, Services, Whatwedo, Tools, Plans, Clients, Whorwe, Contact,Footer } from "./Sections"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Whatwedo />
      <Tools />
      <Plans />
      <Clients />
      <Whorwe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
