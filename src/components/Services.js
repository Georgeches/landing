import { useState } from "react"
import ServiceModal from "./ServiceModal"

export default function Services(){
    const services = [
        {
            serviceName: "Bid Bond",
            display: "Bid Bond",
            image: '/bid_bond.jpg',
            description: "A bid bond is a legal agreement that guarantees contractors fulfil their project obligations, providing financial and legal recourse to the project owner. Submitted alongside the tender document, bid bonds are backed by specialized surety companies, ensuring payments are made if the contractor fails to fulfil their obligations. The bid bond guarantees the project owner that, if selected, a bidder will complete the work, guaranteeing that the bidder has the financial means to accept the job at the quoted price",
            requirements: ['Tender document', 'Company name', 'Company address', 'CR12'],
            time: "30 minutes",
            price: "Minimum of KES. 2500"
        },
        {
            serviceName: "Perfomance Bonds",
            display: "Perfomance Bonds",
            image: '/perfomance.jpg',
            description: "A performance bond is a guarantee issued by a reputable bank or insurance company to one party of a contract against the other party's failure to meet the obligations. A performance bond is typically issued to guarantee a contractor's completion of specified projects.",
            requirements: ['Tender Award Letterr'],
            price: "Varies with cost of the tender"
        },
        {
            serviceName: "Letter of Credit",
            display: "Letter of Credit",
            image: '/letter_of_credit.jpg',
            description: "A letter of credit is a document from a bank or financial institution that guarantees a seller's timely and full payment to a buyer, commonly used in the international trade industry, and issuing a letter of credit incurs a fee. Letters of credit are used in international trade transactions to reduce risk and conserve cash flow. Importers can use them to pay for goods only after the supplier provides proof of shipment, conserving cash flow without advance payments or deposits. They also provide instant credibility with exporters by demonstrating creditworthiness.",
            requirements: ['Commercial documents', 'Insurance documents', 'Shipping and transport documents', 'Financial documents', 'Official document required by importer or country of buyer.'],
        },
        {
            serviceName: "Advance Payment Guarantee",
            display: "APG",
            image: '/apg.jpg',
            description: "The advance payment guarantee serves as collateral to cover the buyer's advance payment if the seller fails to deliver the specified goods as per the contract. An advance payment guarantee is an insurance policy or bank surety that guarantees a refund to the buyer if the seller fails to fulfil the agreed-upon obligation of goods or services, thereby reaffirming the buyer's rights to the initial funds paid. A bank guarantees payments to customers from third parties who award projects, but the customer or contractor doesn't yet fulfill the obligation. This bond binds the supplier or bank's customer to spend the advance payment as stated in the contract. It's used for construction projects and protects the client in case the contractor doesn't fulfill their obligations.",
            requirements: ['Award Letter', 'Tender description', 'Bank statements'],
        },
        {
            serviceName: "Contractor's All Risks Insurance",
            display: "CAR",
            image: '/car.jpg',
            description: "Contractors' All Risks (CAR) insurance is a non-standard policy that covers property damage and third-party injury claims in construction projects. It ensures smooth project running by covering property damage and third-party injuries, including subcontractors. CAR insurance also provides coverage for third-party workers on site. It covers construction companies, including individual and private contractors, involved in property development, bridge and road construction, civil engineering, and infrastructural erection, as well as construction of own premises or sites.",
            requirements: [
                'Description of construction works',
                'Location of construction',
                'Total value of Machinery and Equipment on site',
                'Value of materials on site at any one',
                'Value of the contract (contract works)',
                'value of the sorrounding properties',
                'Third party liability cover limit'
            ],
        },
        {
            serviceName: "Work Injury Benefits Act Insurance",
            display: "WIBA",
            image: '/wiba.jpg',
            description: "The Work Injury Benefits Act (WIBA) is an insurance policy that safeguards employers from financial obligations arising from injuries or deaths to employees, lifting the financial burden on employers. Under the Work Injury Benefits Act, (WIBA), the insurance policy is a mandatory requirement for contractors.",
            requirements: ['No. of casuals', 'Daily wages']       
        }
    ]

    const [service, setService] = useState({})

    const images = `${process.env.PUBLIC_URL}/images`
    const sectionClass = window.screen.width < 1024?"container-fluid px-0 services-section":"container-fluid p-0 services-section"
    return (
        <div className={sectionClass} style={{marginTop: "80px"}}>
            <div className="mt-5 services-body">
                <div className="section-header ps-2 ps-lg-5 col-12 col-lg-12">
                    <p style={{
                        fontSize: "20px",
                        margin: "0px"
                    }}>Services</p>
                    <p style={{
                        fontSize: "40px"
                    }} className="fw-bold">We Offer</p>
                    <ul className="services-list mt-3">
                        <li>Bid Bond</li>
                        <li>Perfomance Bonds</li>
                        <li>Letter Of Credit</li>
                        <li>Advance Payment Guarantee</li>
                        <li>Contractor's All Risks Insurance (CAR)</li>
                        <li>Work Injury Benefits Act (WIBA) Insurance</li>
                    </ul>
                    <button className="btn mt-2 text-white" style={{background: "#b58800"}}>Get Quotations</button>
                </div>
                {services.map(service =>
                    <div className="service-wrap" key={service?.display}>
                        <div className="service-with-img" key={service?.display}>
                            <img src={images + service?.image} className="w-100" alt=""/>
                        </div>
                        <button className="btn service-more" onClick={e => setService(service)} data-bs-toggle="modal"
                                data-bs-target="#serviceModal">About {service?.display}</button>
                    </div>
                )}
                <ServiceModal service={service}/>
            </div>
        </div>
    )
}