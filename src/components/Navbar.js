import '../styling/Navbar.css'
import NavOffcanvas from './NavOffcanvas'

export default function Navbar(){

    const logo = process.env.PUBLIC_URL+'/images/logo.png'
    return (
        <>
        {/* >=tablets */}
        <div className="navbar d-none d-md-flex">
            <div className="navbar-brand">
                <img height="100" src={logo} alt='logo'/>
            </div>

            <div className="nav-items">
                <ul className="nav-list mt-2">
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/#services-section' className='nav-link'>Services</a>
                    </li>
                    <li>
                        <a href='#blogs-section' className='nav-link'>Blogs</a>
                    </li>
                    <li>
                        <a href='/#footer-section' className='nav-link'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>

        {/* smaller than tablets */}
        <div className="navbar navbar-small d-md-none">
            <div className="navbar-brand">
            <img height="100" src={logo} alt='logo'/>
            </div>

            <i className="las la-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{fontSize: "30px"}}></i>
            <NavOffcanvas logo={logo}/>
        </div>
        </>
    )
}