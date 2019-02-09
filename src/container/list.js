import React from 'react';
import './list.css';


class List extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            title: "In Progress"
        }
    }
    render(){
        return(
            <div className = 'list'>
                <h4>{this.state.title}</h4>
            </div>
            
        );
    }

}

export default List;