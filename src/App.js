import './App.css';
import { Navbar } from "./Components"
import { Hero, Services, Whatwedo, Tools, Plans, Clients, Whorwe, Contact,Footer } from "./Sections"
import heLang from './languages/hebrew.json'
// import arLang from './languages/arabic.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero language={heLang} />
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
