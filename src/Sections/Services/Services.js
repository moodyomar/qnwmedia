import './Services.css'
import { AiFillCheckCircle } from 'react-icons/ai';
import { SectionHeading, ServiceCard } from '../../Components'


const Services = ({ language }) => {
    const { sh2, features, p, wh2, cards,s,s1,s2,s3 } = language.services;
    return (

        <div className='Services flex-center section' id='1'>
            <h2 className='sectionTitle'>{sh2}
        <div class="slider-wrapper">
          {/* I enjoy */}
          <div class="slider">
              <div class="slider-text1">{s1}</div>
              <div class="slider-text2">{s2}</div>
              <div class="slider-text3">{s3}</div>
          </div>
          {s}
        </div>       
            </h2>


            <div className="image-and-features">
                <img src={'images/qnw-instagram.png'} className="igimg" alt="QNW Media Instagram"
                    data-aos="fade-right" data-aos-duration="2000" />
                <div className="features">
                    {features.map((feature, i) => (
                        <span key={i} className="feature"
                            data-aos="fade-left" data-aos-duration={`${feature.speed}`}>
                            {feature.title} <AiFillCheckCircle size={30} /></span>
                    ))}
                </div>
            </div>


            <SectionHeading p={p} h2={wh2} />
            <div className="cards">
                {cards.map((card, i) => (
                    <ServiceCard key={i} icon={card.icon} title={card.title}
                        desc={card.description} dir={card.dir} />
                ))}
            </div>
        </div>

    )
}

export default Services