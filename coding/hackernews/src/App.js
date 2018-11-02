import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React'
    const userSam = {firstName: 'Sam', lastName: 'Comerford'}
    return (
      <div className="App">
        <h2>{ helloWorld }</h2>
        <h4>Current User: { userSam.firstName } { userSam.lastName }</h4>
        <br/>
        {
          list.map(item => {
            return (
            <div key={item.objectID}>
              <span><a href={item.url}>{item.title} </a></span> 
              <span>{item.author} - </span>
              <span>(Comments: {item.num_comments} </span>
              <span>Likes: {item.points})</span>
            </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
