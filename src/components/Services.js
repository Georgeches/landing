export default function Services(){
    const images = `${process.env.PUBLIC_URL}/images`
    const sectionClass = window.screen.width < 1024?"container-fluid px-0 services-section border":"container-fluid border p-0 services-section"
    return (
        <div className={sectionClass} style={{marginTop: "80px"}}>
            <div className="mt-5 services-body border">
                <div className="section-header col-12 col-lg-4">
                    <p style={{
                        fontSize: "20px",
                        margin: "0px"
                    }}>Services</p>
                    <p style={{
                        fontSize: "40px"
                    }} className="fw-bold">We Offer</p>
                    <ul className="services-list mt-3">
                        <li>Letter Of Credit</li>
                        <li>Bid Bond</li>
                        <li>Contractor's All Risks Insurance (CAR)</li>
                        <li>Advance Payment Guarantee</li>
                        <li>Perfomance Bonds</li>
                        <li>Work Injury Benefits Act (WIBA) Insurance</li>
                    </ul>
                    <button className="btn mt-2 text-white" style={{background: "#b58800"}}>Get Quotations</button>
                </div>
                <div className="service-with-img">
                    <img src={images+'/letter_of_credit.jpg'} className="w-100" alt=""/>
                </div>

                <div className="service-with-img">
                    <img src={images+'/bid_bond.jpg'} className="w-100" alt=""/>
                </div>

                <div className="service-with-img">
                    <img src={images+'/car.jpg'} className="w-100" alt=""/>
                </div>

                <div className="service-with-img">
                    <img src={images+'/apg.jpg'} className="w-100" alt=""/>
                </div>

                <div className="service-with-img">
                    <img src={images+'/bid_bond2.jpg'} className="w-100" alt=""/>
                </div>
            </div>
        </div>
    )
}