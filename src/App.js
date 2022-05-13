import './App.css';
import { useContext } from 'react';
import { Navbar,LngSelect } from "./Components"
import { Hero, Services, Whatwedo, Tools, Plans, Clients, Whorwe, Contact,Footer } from "./Sections"
import LanguageContext from './context/LanguageContext'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import heLang from './languages/hebrew.json'
import arLang from './languages/arabic.json'

function App() {

  AOS.init({
    offset: 200,
  });

const {language} = useContext(LanguageContext);
let lng = language === 'arabic' ? arLang : heLang

  return (

    <div className="App">
      {/* <LngSelect/> */}
      <Navbar language={lng} />
      <Hero language={lng} />
      <Services language={lng} />
      <Whatwedo language={lng} />
      <Tools language={lng} />
      <Plans language={lng}/>
      <Clients language={lng} />
      <Whorwe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
