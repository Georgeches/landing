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
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        1. Non consectetur a erat nam at lectus urna duis?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue justo. Etiam metus dolor, blandit in imperdiet in, feugiat vel massa. Duis diam augue, semper sed mollis ut, congue et neque. Praesent mattis, ante sed dignissim suscipit, diam velit porttitor erat, id ornare leo sapien eget elit. Phasellus ultricies fringilla dolor at tincidunt. Integer auctor dui in purus aliquet interdum.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        2. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue justo. Etiam metus dolor, blandit in imperdiet in, feugiat vel massa. Duis diam augue, semper sed mollis ut, congue et neque. Praesent mattis, ante sed dignissim suscipit, diam velit porttitor erat, id ornare leo sapien eget elit. Phasellus ultricies fringilla dolor at tincidunt. Integer auctor dui in purus aliquet interdum.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    3. Dolor sit amet consectetur adipiscing elit pellentesque?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue justo. Etiam metus dolor, blandit in imperdiet in, feugiat vel massa. Duis diam augue, semper sed mollis ut, congue et neque. Praesent mattis, ante sed dignissim suscipit, diam velit porttitor erat, id ornare leo sapien eget elit. Phasellus ultricies fringilla dolor at tincidunt. Integer auctor dui in purus aliquet interdum.                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}