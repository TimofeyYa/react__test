const inisialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = inisialState,action) =>{
    if(action.type === 'SET_PIZZAS'){
        return {
            ...state,
            items: action.payload
        }
    }
    if(action.type === 'SET_LOAD'){
        return {
            ...state,
            isLoaded: action.payload
        }
    }

    return state;
}

export default pizzas;