import '../styling/Hero.css'
import {Link} from "react-scroll";

export default function Hero(){
    const hero_image = '/images/hero.avif'
    return (
        <div className="hero container-fluid p-0 d-flex justify-content-center flex-wrap">
            <img src={hero_image} className="w-100" alt="hero"/>
            <div className='hero-texts'>
                <p className='hero-texts-header'>Welcome to Our Website</p>
                <p className='hero-texts-small'>Providing the right advice; powering your business.</p>
                <Link to="about" smooth={true} duration={300}><button className='hero-texts-button'>Explore</button></Link>
            </div>
            <div className='hero-bottom' id="about" style={{position: "absolute", bottom: 100}}>

            </div>
        </div>
    )
}