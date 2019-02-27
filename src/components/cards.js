import React from 'react';
import './cards.css';
import Tag from './tags';



const Cards = (props)=>{
    return(
        <div className ='task'>
        <span className = 'task-title'>{props.title}</span>
        <div className = 'card-holder'>
        {
            props.tags.map((e,i)=>{
                return <Tag color={e.color} type={e.type} key={i}/>
            })
        }
        </div>
        
        </div>
    );
}
export default Cards;