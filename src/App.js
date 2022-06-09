import './App.css';
import { useContext } from 'react';
import { LngSelect } from "./Components"
import LanguageContext from './context/LanguageContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heLang from './languages/hebrew.json'
import arLang from './languages/arabic.json'
import Home from './pages/Home/Home';



function App() {

  AOS.init({
    offset: 200,
  });

  const { language } = useContext(LanguageContext);
  let lng = language === 'ar' ? arLang : heLang

  return (

    <div className="App">
      <Router>
        <Routes>
        <Route index element={<LngSelect lng={lng} />} />
        <Route path={`/${language}`} element={<Home lng={lng} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
