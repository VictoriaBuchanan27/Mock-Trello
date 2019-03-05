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
    // const EmptyCards=props=>{
    //     return(
    //         <div className='empty'>
    //         <span className='empty-title'>{props.empty.title}</span>
    //         <div className='empty-card-holder'>
    //         {
    //         props.tags.map((e,i)=>{
    //             return <Tag color={e.color} type={e.type} key={i}/>
    //         })
    //     }
    //         </div>
    //         </div>
    //     )
    
}
export default Cards;