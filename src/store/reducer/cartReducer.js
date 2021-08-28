const initialState = {
    cart :[],
    user: null
};


const cartReducer = ( state=initialState, action) => { 

    switch(action.type) {
       
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]                
            }

        case "REMOVE_FROM_CART":
            let newCart = state.cart;
            
            function isIndex(product) {
                return product.id === action.id;
            }
            const index = newCart.findIndex(isIndex);
            const editedCart= newCart.splice(index, 1);

            return {
                ...state,
                cart: newCart
            }

        case "EMPTY_CART":
            return {
                ...state,
                cart: [],
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}

export default cartReducer;