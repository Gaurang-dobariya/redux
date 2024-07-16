import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PENDING, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_SUCCESS } from "./action";

let initialState = {
    product: [],
    isLoading: false,
    isError: null
}

let adminReducer = (state = initialState, action) => {
    console.log(action, "action fron reducer");

    switch (action.type) {
        case (GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, DELETE_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING): {
            return {
                ...state,
                isLoading: true
            }
        }

        // get product
        case GET_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: action.payload
            }
        }

        // post product
        case POST_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.concat(action.payload)
            }
        }

        // delete product
        case DELETE_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.filter((val) => val.id !== action.payload.id)
            }
        }

        // update product
        case UPDATE_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.concat((val) => val.id == action.payload.id ? { ...action.payload } : val)
            }
        }

        case (GET_PRODUCT_ERROR, POST_PRODUCT_ERROR, DELETE_PRODUCT_ERROR, UPDATE_PRODUCT_ERROR): {
            return {
                isLoading: false,
                product: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default adminReducer