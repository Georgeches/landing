export default function Questions(){

    return(
        <div className="container d-flex flex-wrap gap-5" style={{marginTop: "130px"}}>
            <div className="questions-header">
                <p style={{
                    fontSize: "20px",
                    margin: "0px"
                }}>Frequently Asked</p>
                <p style={{
                    fontSize: "40px"
                }} className="fw-bold">Questions</p>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        What is trade finance?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        Trade finance is a banking instrument that mitigates risks in international trade by reducing out-of-pocket costs for buyers and sellers. It helps in streamlining supply chains, reducing costs, and promoting confidence in transactions due to the inherent risks of time lag and different countries involved.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        How long does it take to process a bid bond?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    30 minutes to 1 hour after all the requirements are met and payment made. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Are there different types of bid bonds? 
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    No. However, one can get a bid bond from the insurance company, a microfinance or a commercial bank. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Should I use a bid bond from any provider? 
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    Yes. In most cases it is based on the customer’s preference. However, in some instances, the tender document specifies if one should provide a one from an insurance, commercial bank, or a microfinance.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    How long does it take to process a performance bond?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    2 hours once all the requirements are met and payment made. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                    How long does it take to process an advance guarantee?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    2 hours once all the requirement and payments are made.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                    How long does it take to process WIBA?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    2 hours once all the requirements are met and payment made. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                    How long does it take to process CAR?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    2 hours once all the requirements are met and payment made. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                    What is the cost?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    The cost depends on which products works best for you and specific metrics for each category including the contract's cost.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}