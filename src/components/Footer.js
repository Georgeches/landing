import { useState } from "react"
import emailjs from '@emailjs/browser';

export default function Footer(){

    const mailApi = process.env.REACT_APP_MAIL_API
    const serviceID = process.env.REACT_APP_SERVICE_ID
    const templateID = process.env.REACT_APP_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY

    console.log(process.env.REACT_APP_EMAIL_PUBLIC_KEY)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [resp, setResp] = useState(0)

    const templateParams = {
        to_name: 'Timvest ventures',
        from_email: email,
        from_name: name,
        message: message,
        reply_to: email
    }

    function sendMail(e){
        e.preventDefault()

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(response=> {
                console.log(response)
            })
            .catch(err=>console.error(err))

        // fetch(`${mailApi}/sendemail`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type':'application/json'
        //     },
        //     body: JSON.stringify(mail)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     setResp({
        //         message: data?.status===500?"Email not sent. Please try again later":"Email sent successfully",
        //         status: data?.status
        //     })
        //     if(data?.status!==500){
        //         setName("")
        //         setEmail("")
        //         setMessage("")
        //     }
        // })
    }

    const pStyle = {
        fontSize: "18px"
    }

    return(
        <div className="container d-flex flex-wrap gap-5" style={{marginTop: "100px"}}>
            <div className="footer1">
                <form className="d-flex flex-column" onSubmit={e => sendMail(e)}>
                    <h4 className="mb-3">Send us a mail</h4>
                    <input className="mb-1" type="text" onChange={e => setName(e.target.value)} value={name}
                           placeholder="Your name"/>
                    <input className="mb-1" type="email" onChange={e => setEmail(e.target.value)} value={email}
                           placeholder="Your email address"/>
                    <textarea placeholder="Enter message" onChange={e => setMessage(e.target.value)} value={message}
                              rows="7"></textarea>
                    <button type="submit" className="send-mail">Send message</button>

                    {resp?.status === 500 && (<p className="text-danger">{resp?.message}!</p>)}

                    {resp?.status === 200 && (
                        <p className="text-success my-3 lead fw-normal" style={pStyle}>{resp?.message}!</p>)}
                </form>

                <ul className="links d-flex align-items-center gap-3 p-0 mt-3">
                    <li className="link whatsapp">
                        <a href="tel:0713928513"><i className="bi bi-telephone whatsapp"></i></a>
                    </li>

                    <li className="link whatsapp">
                        <a href="#"><i className="bi bi-whatsapp whatsapp"></i></a>
                    </li>
                </ul>
            </div>

            <div className="d-flex flex-wrap gap-5">
                <div className="footer-category">
                    <h5 className="mb-3">Useful links</h5>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Services</p>
                    <p>Blogs</p>
                </div>

                <div className="footer-category">
                    <h5 className="mb-3">Our Services</h5>
                    <p>Bid Bond</p>
                    <p>Perfomance Bonds</p>
                    <p>Letter of Credit</p>
                    <p>Advance Payment Guarantee</p>
                    <p>Contractor's All Risks Insurance</p>
                    <p>Work Injury Benefits Act Insurance</p>
                </div>

                <div className="footer-category">

                    <p className="text-dark"><strong>Phone:</strong> 0713928513</p>
                    <p className="text-dark"><strong>Email:</strong> example@gmail.com</p>
                </div>
            </div>
        </div>
    )
}