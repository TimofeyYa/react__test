 import React from "react";

 function Button(props){
   
     return(
        <button href="/cart.html" className={`button ${props.className}`} >
          {props.children}
        </button>
     )
 }

 export default Button;