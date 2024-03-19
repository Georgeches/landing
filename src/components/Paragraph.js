export default function Paragraph({paragraph}){

    return(
        paragraph.type==="text"?
            <p className="mb-5" style={{fontSize: "18px", lineHeight: "2"}}>{paragraph.content}</p>
        :
            <img className="mb-5 w-100" src={paragraph.content} alt="img"/>
    )
}