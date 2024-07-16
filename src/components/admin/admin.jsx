import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PENDING, GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING } from '../../redux-saga/admin/action'

const Admin = () => {

    let dispatch = useDispatch()

    let [view, setview] = useState({})

    let image = useRef()
    let name = useRef()
    let price = useRef()
    let desc = useRef()

    // add data
    let addProduct = () => {
        let product = {
            image: image.current.value,
            name: name.current.value,
            price: price.current.value,
            desc: desc.current.value
        }
        console.log(product);

        dispatch({ type: POST_PRODUCT_PENDING, payload: product })
    }

    // fecth data
    let result = useSelector((state) => state.adminReducer)

    // delete Product
    let deleteProduct = (id) => {
        // console.log(id);
        dispatch({ type: DELETE_PRODUCT_PENDING, payload: id })
    }

    // update product
    function viewdata(product) {
        setview(product)
    }

    function handle(e) {
        setview({ ...view, [e.target.name]: e.target.value })
    }

    function updateProduct() {
        dispatch({ type: UPDATE_PRODUCT_PENDING, payload: view })
    }

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PENDING })
    }, [])

    return (
        <div className="container-fluid mt-3">

            <div className='d-flex mb-3 justify-content-between'>
                <input type="search" className='form-control text-center' placeholder='search' style={{ width: "25%" }} />
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" style={{ width: "10%" }} data-bs-target="#exampleModal" data-bs-whatever="@mdo">ADD PRODUCT</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add product</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label class="form-label fw-semibold">Product Image : </label>
                                <input type="text" ref={image} style={{ width: "100%" }} className='form-control text-center mb-3' placeholder='enter image link' />
                                <label class="form-label fw-semibold">Product Name : </label>
                                <input type="text" ref={name} style={{ width: "100%" }} className='form-control text-center mb-3' />
                                <label class="form-label fw-semibold">Product Price : </label>
                                <input type="text" ref={price} style={{ width: "100%" }} className='form-control text-center mb-3' />
                                <label class="form-label fw-semibold">Product Description : </label>
                                <input type="text" ref={desc} style={{ width: "100%" }} className='form-control text-center mb-3' />
                            </div>
                            <div class="modal-footer">
                                <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={addProduct}>Add Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table border text-center">
                <thead>
                    <tr>
                        <th scope="col" className='bg-primary text-light text-opacity-75'>No</th>
                        <th scope="col" className='bg-primary text-light text-opacity-75'>Image</th>
                        <th scope="col" className='bg-primary text-light text-opacity-75'>Name</th>
                        <th scope="col" className='bg-primary text-light text-opacity-75'>Price</th>
                        <th scope="col" className='bg-primary text-light text-opacity-75'>Decription</th>
                        <th scope="col" className='bg-primary text-light text-opacity-75'>Delete</th>
                        <th scope="col" className='bg-primary text-light text-opacity-75'>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.product.map((val, index) => {
                            return (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td><img src={val.image} width={60} /></td>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td>{val.desc}</td>
                                    <td><button onClick={() => deleteProduct(val.id)} className='btn btn-outline-primary'>Delete</button></td>
                                    <td><button onClick={() => viewdata(val)} class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#updateModal" data-bs-whatever="@mdo">Update</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="updateModalLabel">Update Product Details</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* <form> */}
                            <div class="mb-3">
                                <label class="col-form-label fw-semibold">Image:</label>
                                <input type="text" name="img" value={view.image} onChange={handle} class="form-control border border-secondary" />
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label fw-semibold">Name:</label>
                                <input type="text" name="name" value={view.name} onChange={handle} class="form-control border border-secondary" />
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label fw-semibold">Price:</label>
                                <input type="text" name="price" value={view.price} onChange={handle} class="form-control border border-secondary" />
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label fw-semibold">Description:</label>
                                <input type="text" name="desc" value={view.desc} onChange={handle} class="form-control border border-secondary" />
                            </div>
                            {/* </form> */}
                        </div>
                        <div class="modal-footer">
                            <button onClick={updateProduct} type="button" data-bs-dismiss="modal" class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin