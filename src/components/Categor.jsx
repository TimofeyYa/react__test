import React from "react";
import {useSelector} from 'react-redux';

const Categor = React.memo(function Categor(props){
  const storeSelector = useSelector(({filterRed, pizzasRed}) => {
    return{
      category: filterRed.category
    };
  });
  const [active, setActive] = React.useState(storeSelector.category);

  function setActiveItem(index){
    setActive(index)
    props.onClick(index);
  }

  return(
      <div className="categories">
      <ul>
        {props.item && props.item.map((elem, index) =>(
            <li
            className={ active === index ? 'active': ''}
            onClick={()=> setActiveItem(index)}
             key={`${elem}_${index}`
              }>{elem}</li>
        ))}
      </ul>
    </div>
  )
});


export default Categor;