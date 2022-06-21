import { useEffect, useState,useMemo } from 'react';
import HeroCard from '../../Components/HeroCard/HeroCard';
import s1 from '../../assets/money.jpeg';
import s2 from '../../assets/online.jpeg';
import s3 from '../../assets/calls.jpeg';
import s4 from '../../assets/social.jpeg';
import './Hero.css'


const Hero = ({ language }) => {

    const { h1, h11, h12, h13, p, p11, p12, p13, button, cards } = language.hero;
    const images = useMemo(() => {return [s1, s2, s3, s4]},[]);
    const titles = [h1, h11, h12, h13];
    const subtitles = [p, p11, p12, p13];
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        
        setCurrentImage(images[counter]);
        const intervalId = setInterval(() => {

            if (counter >= images.length - 1) setCounter(0);
            else setCounter(counter + 1);

        }, 4500)

        return () => clearInterval(intervalId);
    }, [counter,images])


    return (
        <>
            <div className='Hero flex-center' id='0' style={{ backgroundImage: `url(${currentImage})` }}>
                <div className="bg-overlay"></div>
                <h1 data-aos="zoom-in-down" data-aos-duration="2000">{titles[counter]}</h1>
                <p data-aos="fade-up" data-aos-duration="2500">{subtitles[counter]}</p>
                <button data-aos="fade-up" data-aos-duration="2500">{button}</button>
            </div>
            <div className="Cards flex-center">
                {cards.map(card => <HeroCard key={card.num} num={card.num} title={card.title}
                    desc={card.desc} color={card.color} />)}
            </div>
        </>

    )
}

export default Hero