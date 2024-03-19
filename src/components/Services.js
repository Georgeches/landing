export default function Services(){
    const images = `${process.env.PUBLIC_URL}/images`
    const sectionClass = window.screen.width < 1024?"container-fluid px-0 services-section":"container-fluid p-0 services-section"
    return (
        <div className={sectionClass} style={{marginTop: "80px"}}>
            <div className="mt-5 services-body">
                <div className="section-header ps-2 ps-lg-5 col-12 col-lg-12">
                    <p style={{
                        fontSize: "20px",
                        margin: "0px"
                    }}>Services</p>
                    <p style={{
                        fontSize: "40px"
                    }} className="fw-bold">We Offer</p>
                    <ul className="services-list mt-3">
                        <li>Bid Bond</li>
                        <li>Perfomance Bonds</li>
                        <li>Letter Of Credit</li>
                        <li>Advance Payment Guarantee</li>
                        <li>Contractor's All Risks Insurance (CAR)</li>
                        <li>Work Injury Benefits Act (WIBA) Insurance</li>
                    </ul>
                    <button className="btn mt-2 text-white" style={{background: "#b58800"}}>Get Quotations</button>
                </div>
                <div className="service-with-img">
                    <img src={images+'/bid_bond.jpg'} className="w-100" alt=""/>
                </div>
                <div className="service-with-img">
                    <img src={images+'/perfomance.jpg'} className="w-100" alt=""/>
                </div>
                <div className="service-with-img">
                    <img src={images+'/letter_of_credit.jpg'} className="w-100" alt=""/>
                </div>
                <div className="service-with-img">
                    <img src={images+'/apg.jpg'} className="w-100" alt=""/>
                </div>
                <div className="service-with-img">
                    <img src={images+'/car.jpg'} className="w-100" alt=""/>
                </div>
                <div className="service-with-img">
                    <img src={images+'/wiba.jpg'} className="w-100" alt=""/>
                </div>
            </div>
        </div>
    )
}