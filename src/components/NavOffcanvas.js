export default function NavOffcanvas(){

    return(
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <p className="brand">Brand</p>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="nav-list flex-column">
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
            </div>
        </div>
    )
}