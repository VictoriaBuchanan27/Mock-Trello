import React from 'react';
import './tags.css'

const Tag = (props) =>{
    return (

  <div className ='badge badge-primary' style ={{backgroundColor: props.color}}>{props.type}</div>
    );
}

export default Tag ;