export default function Footer(){

    return(
        <div className="container d-flex flex-wrap gap-5" style={{marginTop: "100px"}}>
            <div className="footer1">
                <form className="d-flex flex-column">
                    <h4 className="mb-3">Send us a mail</h4>
                    <input className="mb-1" placeholder="Your email address"/>
                    <textarea placeholder="Your message" rows="7"></textarea>
                    <button type="submit" className="send-mail">Send message</button>
                </form>
            
                <ul className="links d-flex align-items-center gap-3 p-0 mt-3">
                    <li className="link facebook">
                        <a href="#"><i className="bi bi-facebook facebook"></i></a>
                    </li>

                    <li className="link whatsapp">
                        <a href="#"><i className="bi bi-whatsapp whatsapp"></i></a>
                    </li>

                    <li className="link linkedin">
                        <a href="#"><i className="bi bi-linkedin linkedin"></i></a>
                    </li>
                </ul>
            </div>

            <div className="d-flex flex-wrap gap-5">
                <div className="footer-category">
                    <h5 className="mb-3">Useful links</h5>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Services</p>
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                </div>

                <div className="footer-category">
                    <h5 className="mb-3">Our Services</h5>
                    <p>Bid Bond</p>
                    <p>Perfomance Bonds</p>
                    <p>Letter of Credit</p>
                    <p>Advance Payment Guarantee</p>
                    <p>Contractor's All Risks Insurance</p>
                    <p>Work Injury Benefits Act Insurance</p>
                </div>

                <div className="footer-category">
                    <h5 className="mb-3">Contact us</h5>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                    <p className="mb-4">United States</p>

                    <p className="text-dark"><strong>Phone:</strong> 0712345678</p>
                    <p className="text-dark"><strong>Email:</strong> example@gmail.com</p>
                </div>
            </div>
        </div>
    )
}