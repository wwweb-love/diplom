const initialStateProduct = {
    listProducts: [],
    listCategories: [],
    selectedCategory: "all",
    selectedProduct: {},
    statusProductOnBasket: false,
    basket: {},
    globalError: "",
    user: null,
    adminUsersData: null,
    adminProductsData: null,
    adminCategoriesData: null
    
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

        case "SET_USER": {
            return {
                ...state,
                user: action.payload
            }
        }

        case "SET_SELECTED_CATEGORY": {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }

        case "SET_ADMIN_USERS_DATA": {
            return {
                ...state,
                adminUsersData: action.payload
            }
        }

        case "SET_ADMIN_PRODUCTS_DATA": {
            return {
                ...state,
                adminProductsData: action.payload
            }
        }

        case "SET_ADMIN_CATEGORIES_DATA": {
            return {
                ...state,
                adminCategoriesData: action.payload
            }
        }

        default: 
            return state
    }
}