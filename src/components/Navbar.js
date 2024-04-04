import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll';
import '../styling/Navbar.css'
import NavOffcanvas from './NavOffcanvas'

export default function Navbar(){

    const nav = useNavigate()
    const logo = process.env.PUBLIC_URL+'/images/logo.png'
    return (
        <>
        {/* >=tablets */}
        <div className="navbar d-none d-md-flex">
            <div className="navbar-brand">
                <a href='/'><img height="100" src={logo} alt='logo'/></a>
            </div>

            <div className="nav-items">
                <ul className="nav-list mt-2">
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Home</a>
                    </li>
                    <li>
                        <p style={{cursor:"pointer"}}><Link to="about" smooth={true} duration={300}>About</Link></p>
                    </li>
                    <li>
                        <p style={{cursor:"pointer"}}><Link to="services" smooth={true} duration={300}>Services</Link></p>
                    </li>
                    <li>
                        <p style={{cursor:"pointer"}}><Link to="blogs" smooth={true} duration={300}>Blogs</Link></p>
                    </li>
                    <li>
                        <p style={{cursor:"pointer"}}><Link to="footer" smooth={true} duration={300}>Contacts</Link></p>
                    </li>
                </ul>
            </div>
        </div>

        {/* smaller than tablets */}
        <div className="navbar navbar-small d-md-none">
            <div className="navbar-brand">
                <a href='/'><img height="100" src={logo} alt='logo'/></a>
            </div>

            <i className="las la-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{fontSize: "30px"}}></i>
            <NavOffcanvas logo={logo}/>
        </div>
        </>
    )
}