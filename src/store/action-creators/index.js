export const addToCart = ({ id, title, image, price, rating }) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_TO_CART",
            item: { 
                id: id,  
                title: title, 
                image: image, 
                price: price, 
                rating: rating }
        })
    }
}

export const removeFromCart = ({ id }) => {
    return(dispatch) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id
        })
    }
}

export const emptyCart= ([]) => {
    return (dispatch) => {
        dispatch({
            type: "EMPTY_CART",
            item: []
        })
    }
}

export const setUser = (authUser) => {
    return(dispatch) => {
        dispatch({
            type: "SET_USER",
            user: authUser
        })
    }
}