import React from "react";
import {Categor, Sort, PizzaBlock} from '../components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import {setCategory, setSortBy} from '../redux/actions/filter'


const categorItems = [
  "Все",
  "Мясные",
  "Веганские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [{name:'популярности', type: 'rating'},
{name:"цене", type:"price"},
{name:"алфавиту", type:'name'}];
function Main(){
  const dispatch = useDispatch();

  const storeSelector = useSelector(({filterRed, pizzasRed}) => {
    return{
      item: pizzasRed.items,
      sortBy:filterRed.sortBy
    };
  });
  
  const setSort = item => {
    dispatch(setSortBy(item));
  }
  const disCat = React.useCallback(item => dispatch(setCategory( item)), []);
    return(
        <div className="container">
        <div className="content__top">
          <Categor
             onClick={disCat}
             item={categorItems}/>
         <Sort onClick={setSort} item={sortItems}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            storeSelector.item[0] && storeSelector.item.map(obj =>  <PizzaBlock key={`pizza__${obj.id}`} {...obj} />)
          }
         
        </div>
      </div>
    )
}

Main.propTypes = {
  items: PropTypes.array.isRequired
}

Main.propTypes = {
  item: []
}

export default Main;