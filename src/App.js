import React, { Component } from 'react';
import List from './container/list';
import Nav from './components/nav'

const inProgess = [
    {
      title: "Redo Unit 2 Exam",
      tags: [{ type: 'Coding', color: 'blue' }]
    },
    {
      title: "Read JavaScript & Jquery Textbook",
      tags: [{ type: 'Coding', color: 'blue' }, { type: 'Reading', color: 'green' }]
    },
    {
      title: "Design New Logo for //codeBreak",
      tags: [{ type: 'Podcast', color: 'orange' }, { type: 'Marketing', color: 'purple' }]
    },
  ]

const completed = [
  {
    title: "Trello Remake",
    tags: [{ type: 'Coding', color: 'blue' }]
  },
  {
    title: "1 of 10 Web / App Goal",
    tags: [{ type: 'Coding', color: 'blue' }]
  }
]

const next = [
  {
    title: "Build Calulator app again, but iPhone responsive",
    tags: [{ type: 'Coding', color: 'blue' }]
  },
  {
    title: "Spa Day",
    tags: [{ type: "Selfcare", color: "yellow" }]
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
        <List cards={next} title="Next" />
        <List cards={inProgess} title = "In Progress"/>
        <List cards={completed} title= "Completed"/>

      </div>
    );
  }
}

export default App;
