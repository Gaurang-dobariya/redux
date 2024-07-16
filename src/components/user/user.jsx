import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {

    let Productdata = useSelector((state) => state.adminReducer)

    return (
        <div className="container my-5">
            <div className="row">
                {Productdata.product.map((val, index) => {
                    return (
                        <>
                            <div className="col-md-3 my-3">
                                <div class="card">
                                    <img style={{ width: "200px", padding: "20px" }} src={val.image} class="mx-auto" alt="Image" />
                                    <div class="card-body">
                                        <h4 class="card-title d-flex justify-content-between">{val.name}<span>{val.price}</span></h4>
                                        <p class="card-text">{val.desc}</p>
                                        <button class="btn btn-primary" style={{ width:"100%" }}>View Product</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default User