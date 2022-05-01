import './App.css';
import { Navbar } from "./Components"
import { Hero, Services, Whatwedo, Tools, Plans, Clients, Whorwe, Contact,Footer } from "./Sections"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import heLang from './languages/hebrew.json'
import { useState } from 'react';
// import arLang from './languages/arabic.json'

function App() {
  AOS.init({
    offset: 200,
  });

  const [lng,setLng] = useState();

  return (
    <div className="App">
      <Navbar />
      <Hero language={heLang} />
      <Services language={heLang} />
      <Whatwedo language={heLang} />
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
