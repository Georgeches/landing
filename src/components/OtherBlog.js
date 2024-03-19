export default function OtherBlog({blog}){

    const link = `/blog/${blog?.id}`;
    return(
        <a href={link} className="w-100">
            <div key={blog?.id} className="d-flex py-2 px-2 w-100 other-blog" style={{borderTop: "1px solid rgb(207, 207, 207)", cursor: "pointer"}}>
                <img className="me-2" src={blog?.image} alt="blog" height="50"/>
                <p className="text-dark">{blog?.title}</p>
            </div>
        </a>
    )
}