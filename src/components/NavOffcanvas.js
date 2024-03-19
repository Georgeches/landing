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
                        <a href='/about' className='nav-link'>About</a>
                    </li>
                    <li>
                        <a href='/services' className='nav-link'>Services</a>
                    </li>
                    <li>
                        <a href='/blogs' className='nav-link'>Blogs</a>
                    </li>
                    <li>
                        <a href='/contact' className='nav-link'>Contact</a>
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