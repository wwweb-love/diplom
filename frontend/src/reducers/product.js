const initialStateProduct = {
    listProducts: [],
    listCategories: [],
    selectedProduct: {},
    basket: {},
    globalError: ""
}

export const product = (state = initialStateProduct, action) => {
    switch (action.type) {
        // cases
        case "CREATE_PRODUCTS": {
            return {
                ...state,
                listProducts: action.payload
            }
        }

        case "CREATE_PRODUCT": {
            return {
                ...state,
                selectedProduct: action.payload
            }
        }

        case "CREATE_CATEGORIES": {
            return {
                ...state,
                listCategories: action.payload
            }
        }

        case "CREATE_BASKET": {
            return {
                ...state,
                basket: action.payload
            }
        }

        case "SET_GLOBAL_ERROR": {
            return {
                ...state,
                globalError: action.payload
            }
        }

        default: 
            return state
    }
}