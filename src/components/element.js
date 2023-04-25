import React from 'react';
function Element(props) {
  return( 
         props.value.map((e)=><div className="element">{e}</div>)
         )
    
}

export default Element;
