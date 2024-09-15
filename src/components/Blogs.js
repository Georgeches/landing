import '../styling/sections.css'

export default function Blogs(){

    return(
        <div className="container mt-5 blogs-section">
            <div className="text-center">
                <h2 className="fw-bold">Recent Blogs</h2>
                <p>Get up-to-date information on bonds and insurances to make sure you make the right decision</p>
            </div>

            <div className="blogs d-flex justify-content-center align-items-center gap-2 flex-wrap mt-4">
                <div className="blog">
                    <div className="blog-image">
                        <a href='/blog/1'><img
                            src="https://img.freepik.com/free-photo/construction-silhouette_1127-3246.jpg?size=626&ext=jpg"
                            alt="blog"/></a>
                    </div>
                    <div className="blog-texts">
                        <a href='/blog/1'><p className="blog-details fw-bold text-dark"
                                             style={{fontSize: "18px"}}>Engineers' body poll: Buildings collapse, jobs
                            dominate debate</p></a>
                        <p className='text-secondary mt-3'>2 days ago</p>
                    </div>
                </div>

                <div className="blog">
                    <div className="blog-image">
                        <a href='/blog/1'><img
                            src="https://img.freepik.com/free-photo/young-black-race-man-with-blueprint-stading-near-glass-building_1157-50906.jpg?size=626&ext=jpg"
                            alt="blog"/></a>
                    </div>
                    <div className="blog-texts">
                        <a href='/blog/1'><p className="blog-details fw-bold text-dark"
                                             style={{fontSize: "18px"}}>Treasury now faulted over milk, bread tax plan
                            in revenue push</p></a>
                        <p className='text-secondary mt-3'>2 days ago</p>
                    </div>
                </div>

                <div className="blog">
                    <div className="blog-image">
                        <a href='/blog/1'><img
                            src="https://img.freepik.com/premium-photo/we-have-some-prime-property-popping-up-here-soon-portrait-young-man-working-construction-site_590464-12523.jpg?size=626&ext=jpg"
                            alt="blog"/></a>
                    </div>
                    <div className="blog-texts">
                        <a href='/blog/1'><p className="blog-details fw-bold text-dark"
                                             style={{fontSize: "18px"}}>Public land under siege if proposed new law is
                            passed</p></a>
                        <p className='text-secondary mt-3'>3 days ago</p>
                    </div>
                </div>

                <div className="blog">
                    <div className="blog-image">
                        <a href='/blog/1'><img
                            src='https://img.freepik.com/premium-photo/running-job-site-is-joint-effort-shot-young-man-woman-going-building-plans-construction-site_590464-22488.jpg?size=626&ext=jpg&ga=GA1.1.1756677183.1710751488&semt=sph'
                            alt='blog'/></a>
                    </div>
                    <div className="blog-texts">
                        <a href='/blog/1'><p className="blog-details fw-bold text-dark" style={{fontSize: "18px"}}>State
                            order on adverts undermines consumer choice</p></a>
                        <p className='text-secondary mt-3'>3 days ago</p>
                    </div>
                </div>

                <div className="blog">
                    <div className="blog-image">
                        <a href='/blog/1'><img
                            src='https://img.freepik.com/premium-photo/portrait-engineer-team-smile-black-people-construction-site-with-coffee-teamwork-architecture-happy-african-man-woman-with-tea-collaboration-cooperation-with-mockup-space_590464-178787.jpg?size=626&ext=jpg&ga=GA1.1.1756677183.1710751488&semt=sph'
                            alt='blog'/></a>
                    </div>
                    <div className="blog-texts">
                        <a href='/blog/1'><p className="blog-details fw-bold text-dark" style={{fontSize: "18px"}}>State
                            order on adverts undermines consumer choice</p></a>
                        <p className='text-secondary mt-3'>3 days ago</p>
                    </div>
                </div>

                <div className="blog">
                    <div className="blog-image">
                        <a href='/blog/1'><img
                            src='https://img.freepik.com/premium-photo/asian-two-business-man-construction-engineers-supervising-progress-construction-project_327072-23165.jpg?size=626&ext=jpg&ga=GA1.1.1756677183.1710751488&semt=sph'
                            alt='blog'/></a>
                    </div>
                    <div className="blog-texts">
                        <a href='/blog/1'><p className="blog-details fw-bold text-dark" style={{fontSize: "18px"}}>State
                            order on adverts undermines consumer choice</p></a>
                        <p className='text-secondary mt-3'>3 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}