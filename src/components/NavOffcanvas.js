import { Link } from 'react-scroll';

export default function NavOffcanvas({logo}){

    return(
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
            <a href="/"><img height="100" src={logo} alt='logo'/></a>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="nav-list mt-3 flex-column">
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Home</a>
                    </li>
                    <li>
                        <p style={{cursor: "pointer"}} data-bs-dismiss="offcanvas"><Link to="about" smooth={true}
                                                                                         duration={300}>About</Link></p>
                    </li>
                    <li>
                        <p style={{cursor: "pointer"}} data-bs-dismiss="offcanvas"><Link to="services" smooth={true}
                                                                                         duration={300}>Services</Link>
                        </p>
                    </li>
                    <li>
                        <p style={{cursor: "pointer"}} data-bs-dismiss="offcanvas"><Link to="blogs" smooth={true}
                                                                                         duration={300}>Blogs</Link></p>
                    </li>
                    <li>
                        <p style={{cursor: "pointer"}} data-bs-dismiss="offcanvas"><Link to="faqs" smooth={true}
                                                                                         duration={300}>FAQs</Link></p>
                    </li>
                    <li>
                        <p style={{cursor: "pointer"}} data-bs-dismiss="offcanvas"><Link to="footer" smooth={true}
                                                                                         duration={300}>Contacts</Link>
                        </p>
                    </li>
                </ul>

                <ul className="nav-bottom-list flex-column" style={{position: "absolute", bottom: "30px"}}>
                    <li className='nav-item mb-3'>
                    <a className='nav-link text-secondary' href='/'>Terms Of Service</a>
                    </li>
                    <li>
                        <a href='/about' className='nav-link text-secondary'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}