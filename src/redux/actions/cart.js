export const addPizza = (pizza) =>{
    return {
        type:'ADD_PIZZAS',
        payload: pizza
   }
}

export const removePizza = (pizza) =>{
    return {
        type:'REMOVE_PIZZAS',
        payload: pizza
   }
}
export const delitPizza = (pizza) =>{
    return {
        type:'DELITE_PIZZAS',
        payload: pizza
   }
}

export const clearPizzas = () =>{
    return {
        type:'CLEAR_PIZZAS',
   }
}
export const addAll = (pizzaArr) =>{
    console.log(pizzaArr);
    pizzaArr.forEach(item=>{
        item.count = 0;
        item.sum = 0;
    })
    return {
        type:'ADDALL_PIZZAS',
        payload: pizzaArr
   }
}
