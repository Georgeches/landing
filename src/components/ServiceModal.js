export default function ServiceModal({service}){

    console.log(service)
    return(
        <div class="modal fade" id="serviceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{service?.serviceName}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {service?.description}
                    <h6 className="mt-2">Requirements</h6>
                    <ul className="mb-3">
                        {service?.requirements?.map(requirement=>
                            <li>{requirement}</li>
                        )}
                    </ul>
                    {service?.price&&<p>Price: {service?.price}</p>}
                    <p>Terms and conditions apply.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}