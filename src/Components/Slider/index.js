import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles.scss'; 


const Slider = () => {
    
    return (
        <div className="carousel-content">
            <Carousel
            autoPlay
            interval={2000}
            infiniteLoop
            thumbWidth={120}
            showIndicators={false}
            showStatus={false}
            >
                <div className="carouselImg">
                    <img src= "https://cdn.sportmonks.com/images/soccer/teams/30/62.png" alt=""/>
                    <div className="overlay">
                        <h4 className="overlay-title">Champion 2020/2021</h4>
                        <p className="overlay-text">Glasgow Rangers</p>
                    </div>
                </div>
                <div className="carouselImg">
                    <img src= "https://cdn.sportmonks.com/images/soccer/teams/30/734.png" alt=""/>
                    <div className="overlay">
                        <h4 className="overlay-title">Vainqueur de la coupe d'Ecosse 2020/2021</h4>
                        <p className="overlay-text">St Johnstone</p>
                    </div>
                </div>
                <div className="carouselImg">
                    <img src= "https://cdn.sportmonks.com/images/soccer/teams/30/734.png" alt=""/>
                    <div className="overlay">
                        <h4 className="overlay-title">Vainqueur de la coupe de la Ligue écossaise 2020/2021</h4>
                        <p className="overlay-text">St Johnstone</p>
                    </div>
                </div>
            </Carousel>
        </div>
            
        
    )
}

export default Slider;