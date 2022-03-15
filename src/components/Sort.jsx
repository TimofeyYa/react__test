import React from "react";
import PropTypes from 'prop-types'

const Sort = React.memo(function Sort(props){
    const [visibale, visibaleSet] = React.useState(false);
    const [selectIndex, setSelectIndex]= React.useState(0);
    const sortRef = React.useRef(null);


    function changeSelectIndex(id,name){
        visibaleSet(!visibale);
        setSelectIndex(id)
        props.onClick(name)
    }
   
    function clickOutSide(e){
      if (!e.path.includes(sortRef.current)){
        visibaleSet(false)
      }
    }

    React.useEffect(()=>{
      document.body.addEventListener('click', (e)=>{
        clickOutSide(e)
      })
    }, [])

    return(
        <div ref={sortRef} className="sort" >
        <div className="sort__label">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={()=>visibaleSet(!visibale)}>{props.item[selectIndex].name}</span>
        </div>
        {visibale && <div className="sort__popup">
          <ul>
            {props.item && props.item.map((name,id)=>(
                <li 
                 key={`${name.type}_${id}`}
                 className={selectIndex === id ? 'active': ''}
                 onClick={()=>changeSelectIndex(id, name.type)}
                 >{name.name}</li>
            ))}
          </ul> 
        </div>}
      </div>
    )
})

Sort.propTypes = {
  item: PropTypes.array.isRequired
}

Sort.defaultProps = {
  item:  [{name:'популярности', type: 'rating'},
  {name:"цене", type:"price"},
  {name:"алфавиту", type:'name'}]
}

export default Sort;