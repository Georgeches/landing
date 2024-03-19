import { useParams } from "react-router-dom";
import Paragraph from "./Paragraph";
import OtherBlog from "./OtherBlog";
import '../styling/BlogDetail.css';

export default function BlogDetail({blogs}){

    const {id} = useParams();
    const blog = blogs.find(i=>i?.id===id);
    const otherBlogs = blogs.filter(i=>i?.id!==id);
    return(
        blog?.id?
            <div className="container d-flex p-0 justify-content-bewteen flex-wrap" style={{position: "relative", top: "150px"}}>
                <div className="blog-section w-75 px-5">
                    <div className="w-100 px-lg-5">
                        <h1 className="fw-bolder">{blog?.title}</h1>
                    </div>
                    <hr/>

                    <div className="body w-100 d-flex justify-content-center flex-wrap">
                        {blog?.body?.map(p=><Paragraph paragraph={p}/>)}
                    </div>
                </div>
                <div className="w-25 other-section">
                    <h3>More blogs</h3>
                    <div className="d-flex flex-column mt-3">
                        {otherBlogs.map(b=><OtherBlog blog={b}/>)}
                    </div>
                </div>
            </div>
        :
            <div className="container" style={{position: "relative", top: "200px"}}>
                <h1>Blog not found</h1>
                <a href="/">Go back</a>
            </div>
    )
}