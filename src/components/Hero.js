import '../styling/Hero.css'

export default function Hero(){
    const hero_image = process.env.PUBLIC_URL+'/images/hero.avif'
    return (
        <div className="hero container-fluid p-0 d-flex justify-content-center flex-wrap">
            <img src={hero_image} className="w-100" alt="hero"/>
            <div className='hero-texts'>
                <p className='hero-texts-header'>Welcome to Our Website</p>
                <p className='hero-texts-small'>Providing the right advice; powering your business.</p>
                <button className='hero-texts-button'>Explore</button>
            </div>
            <div className='hero-bottom' id="about" style={{position: "absolute", bottom: 100}}>

            </div>
        </div>
    )
}