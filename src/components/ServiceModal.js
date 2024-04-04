export default function ServiceModal({service}){

    console.log(service)
    return(
        <div className="modal fade" id="serviceModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{service?.serviceName}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
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
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}