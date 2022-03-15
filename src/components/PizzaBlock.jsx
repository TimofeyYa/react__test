

import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux';

import ContentLoader from "react-content-loader"
import {addPizza} from '../redux/actions/cart';


function PizzaBlock(props){
    const dispatch = useDispatch();

    const storeData = useSelector(({pizzasRed, cartRed}) => {
      return {
        load: pizzasRed.isLoaded,
        count: cartRed.items
      };
    })
    let count;

    if (storeData.count[props.id]){
      count = storeData.count[props.id].count;
    } else {
      count = 0;
    }

    let [countPizz, setCountPizz] = React.useState(count);

    const [sizePizza, setSizePizza] = React.useState(0);
    const [activeTypes, setActiveTypes] = React.useState(props.types[0]);

    function setPizzaFunc(index){
      setSizePizza(index);
      
    }

 
    function addPizzaFanc(){
      setCountPizz(++countPizz);
       dispatch(addPizza(props.id))
    }
    
    if (storeData.load){
      return(
        <ContentLoader 
        speed={2}
        width={280}
        height={456}
        viewBox="0 0 280 456"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
  
      >
        <circle cx="135" cy="155" r="135" /> 
        <rect x="0" y="301" rx="0" ry="0" width="280" height="34" /> 
        <rect x="0" y="347" rx="0" ry="0" width="280" height="75" /> 
        <rect x="0" y="435" rx="0" ry="0" width="49" height="40" />
      </ContentLoader>
      
    
      )
    }
    if (!storeData.load){

    
    return(
        <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={props.imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{props.name}</h4>
        <div className="pizza-block__selector">
          <ul>
            <li onClick={()=> setActiveTypes(0)} className={`${activeTypes === 0 ? 'active' : ''} ${!props.types.includes(0) ? 'disablePizza' : ''}`} >тонкое</li>
            <li onClick={()=> setActiveTypes(1)} className={`${activeTypes === 1 ? 'active' : ''} ${!props.types.includes(1) ? 'disablePizza' : ''}`} >традиционное</li>
          </ul>
          <ul>
            {props.sizes &&
              props.sizes.map((item, index) => <li 
               key={`pizzaSize__${index}`}
               className={index === sizePizza ? 'active' : ''}
               onClick = {() => setPizzaFunc(index)}>{item} см</li>)
            }
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {props.price} ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span onClick={()=> addPizzaFanc()}>Добавить</span>
            <i>{countPizz}</i>
          </div>
        </div>
        </div>
    )
}
}

PizzaBlock.propTypes ={
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  types:PropTypes.array.isRequired
}


PizzaBlock.defaultProps = {
  sizes: [1,2,3]
}


export default PizzaBlock;