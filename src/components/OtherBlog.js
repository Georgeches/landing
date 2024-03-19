export default function OtherBlog({blog}){

    return(
        <div className="d-flex py-2" style={{borderTop: "1px solid rgb(207, 207, 207)"}}>
            <img className="me-2" src={blog?.image} alt="blog" height="50"/>
            <p className="">{blog?.title}</p>
        </div>
    )
}