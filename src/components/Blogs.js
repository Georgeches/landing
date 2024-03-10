import '../styling/sections.css'

export default function Blogs(){

    return(
        <div className="container mt-5">
            <div className="text-center">
                <h2 className="fw-bold">Recent Blogs</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="blogs d-flex justify-content-center align-items-center gap-4 flex-wrap mt-4">
                <div className="blog">
                    <div className="blog-image">
                        <img src="https://bootstrapmade.com/demo/templates/Append/assets/img/blog/blog-1.jpg" alt="blog"/>
                    </div>
                    <div className="blog-texts">
                        <h5 className='text-secondary'>Topic</h5>
                        <p className="blog-details">Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                        <button>More</button>
                    </div>
                </div>

                <div className="blog">
                    <div className="blog-image">
                        <img src="https://bootstrapmade.com/demo/templates/Append/assets/img/blog/blog-1.jpg" alt="blog"/>
                    </div>
                    <div className="blog-texts">
                        <h5 className='text-secondary'>Topic</h5>
                        <p className="blog-details">Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                        <button>More</button>
                    </div>
                </div>

                <div className="blog">
                    <div className="blog-image">
                        <img src="https://bootstrapmade.com/demo/templates/Append/assets/img/blog/blog-1.jpg" alt="blog"/>
                    </div>
                    <div className="blog-texts">
                        <h5 className='text-secondary'>Topic</h5>
                        <p className="blog-details">Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                        <button>More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}