import React from 'react';
import './list.css';
import Cards from '../components/cards';


class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "In Progress",
            editMode: false
        }
    }
    toggleEditMode = (e) => {
        //this.setState({editMode: !this.setState.editMode});

        if (this.state.editMode === false) {
            this.setState({ editMode: true });
        } else {
            this.setState({ editMode: false });
        }
    }
    titleChange =(e)=>{
        this.setState({title: e.target.value})
    }

    render() {

        const editMode = this.state.editMode ?
                <><input type = "text" value = {this.state.title} onChange={this.titleChange}/><button onClick={this.toggleEditMode}>save</button></>
                : <h4 onDoubleClick={this.toggleEditMode}>{this.state.title}</h4>;
        return (
            <div className='list'>
             {editMode}
            {this.props.cards.map((e,i)=>{
                return <Cards title ={e.title} tags={e.tags} key={i} />;
                })
            }
             
            </div>

        );
    }

}

export default List;