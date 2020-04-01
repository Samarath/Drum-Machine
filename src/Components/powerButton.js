import React from 'react';

const PowerButton = (props) => {
    return (
       <div className={props.class}>
         <label className="switch">
          <input type="checkbox" id= {props.ids}/>
          <span className="slider"></span>
         </label>
       </div>
    )
}

export default PowerButton;