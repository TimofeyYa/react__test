const inisialState = {
    items:[],
    sum: 0,
    count: 0
}

const cartRed = (state =inisialState, action) =>{
    switch (action.type){
        case 'ADD_PIZZAS':{
            state.items[action.payload].count++;
            state.items[action.payload].sum = state.items[action.payload].price*state.items[action.payload].count;

            let summa = 0;
            let coun = 0;
            state.items.forEach(item=>{
                summa+=item.sum;
                coun+=item.count;
            })

            console.log('Количество', state.items[action.payload].sum);
        return {
            ...state,
            sum: summa,
            count:coun
        }
        }
        case 'REMOVE_PIZZAS':{
            state.items[action.payload].count--;
            state.items[action.payload].sum = state.items[action.payload].price*state.items[action.payload].count;

            let summa = 0;
            let coun = 0;
            state.items.forEach(item=>{
                summa+=item.sum;
                coun+=item.count;
            })

            console.log('Количество', state.items[action.payload].sum);
        return {
            ...state,
            sum: summa,
            count:coun
        }
        }
        case 'DELITE_PIZZAS':{
            state.items[action.payload].count = 0;
            state.items[action.payload].sum = state.items[action.payload].price*state.items[action.payload].count;

            let summa = 0;
            let coun = 0;
            state.items.forEach(item=>{
                summa+=item.sum;
                coun+=item.count;
            })

            console.log('Количество', state.items[action.payload].sum);
        return {
            ...state,
            sum: summa,
            count:coun
        }
        }
        case 'CLEAR_PIZZAS':{
            state.items.forEach(item=>{
                item.sum = 0;
                item.count = 0;
            })
            let summa = 0;
            let coun = 0;

            state.items.forEach(item=>{
                summa+=item.sum;
                coun+=item.count;
            })
        return {
            ...state,
            sum: summa,
            count:coun
        }
        }
        case 'ADDALL_PIZZAS':{
            console.log(action.payload);
        return {
            ...state,
            items: action.payload
        }
        }

        default: return state
    }
}

export default cartRed;