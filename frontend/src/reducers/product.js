const initialStateProduct = {
    listProducts: [],
    selectedProduct: null,
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

        default: 
            return state
    }
}