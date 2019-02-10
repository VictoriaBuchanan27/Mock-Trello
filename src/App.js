import React, { Component } from 'react';
import List from './container/list';

const inProgess = [
  {
    title: "Redo Unit 2 Exam",
    tags: [{type: 'Coding', color: 'blue'}]
  },
  {
    title: "Read JavaScript & Jquery Textbook",
    tags: [{type: 'Coding', color: 'blue'}, {type: 'Reading', color: 'green'}]
  },
  {
    title: "Design New Logo for //codeBreak",
    tags: [{type: 'Podcast', color: 'orange'}, {type: 'Marketing', color: 'purple'}]
  },
]

const completed = [
  {
    title: "Trello Remake",
    tags:[{type:'Coding', color: 'blue'}]
  }
]



class App extends Component {
  render() {
    return (
      <div className="App">
       <List cards={inProgess}/> 
       <List cards={inProgess}/> 
       <List cards={inProgess}/> 
      </div>
    );
  }
}

export default App;
