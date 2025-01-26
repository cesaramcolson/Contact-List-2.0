import React from "react";

export const Contact = () => {
    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img src="https://architecture.ou.edu/wp-content/uploads/2018/07/ANGELAPERSON-1447-300x300.jpg" className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-sm-left d-flex justify-content-between">
                    <div className="d-flex flex-column">
                        <h5 className="mx-4 my-2">name</h5>
                        <div className="mb-2">
                            <i className="fas fa-map-marker-alt fa-lg text-muted mr-3"></i>
                            <span className="text-muted p-2">address</span>
                        </div>
                        <div className="mb-2">
                            <i className="fas fa-phone text-muted mr-3"></i>
                            <span className="text-muted small  p-2">phone</span>
                        </div>
                        <div className="mb-2">
                            <i className="fas fa-envelope text-muted mr-3"></i>
                            <span className="text-muted small text-truncate  p-2">email</span>
                        </div>
                    </div>
                    <div>
                        <i className="fas fa-pencil-alt mr-3"></i>
                        <button className="btn"><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        </li>
    )
};