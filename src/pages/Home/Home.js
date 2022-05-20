import { Hero, Services, Whatwedo, Tools, Plans, Clients, Whorwe, Contact,Footer } from "../../Sections"
import {Navbar } from "../../Components"


// import './Home.css'


const Home = ({lng}) => {

    return (

        <div className='Home'>
            <Navbar language={lng} />
            <Hero language={lng} />
            <Services language={lng} />
            <Whatwedo language={lng} />
            <Tools language={lng} />
            <Plans language={lng} />
            <Clients language={lng} />
            <Whorwe language={lng} />
            <Contact language={lng} />
            <Footer language={lng} />
        </div>

    )
}

export default Home