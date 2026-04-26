const initialStateProduct = {
    listProducts: [],
    listCategories: []
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

        case "CREATE_CATEGORIES": {
            return {
                ...state,
                listCategories: action.payload
            }
        }

        default: 
            return state
    }
}