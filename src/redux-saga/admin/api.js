import axios from "axios"
import { BASE_URL, DELETE_PRODUCT, GET_PRODUCT, POST_PRODUCT, PUT_PRODUCT } from "../constant"

let get_product = async (action) => {
    // console.log(action, "action from api")

    let { data, status } = await axios.get(BASE_URL + GET_PRODUCT)

    return { data, status }
}

let post_product = async (action) => {
    // console.log(action, "action fron post api");

    let { data, status } = await axios.post(BASE_URL + POST_PRODUCT, action.payload)

    return { data, status }

}

let delete_product = async (action) => {
    // console.log(action, "action fron delete api");

    let { data, status } = await axios.delete(BASE_URL + DELETE_PRODUCT + action.payload)

    return { data, status }

}

let update_product = async (action) => {
    console.log(action, "action fron update api");

    let { data, status } = await axios.put(BASE_URL + PUT_PRODUCT + action.payload.id, action.payload)

    return { data, status }

}


export { get_product, post_product, delete_product, update_product }