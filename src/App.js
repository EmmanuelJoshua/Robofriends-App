import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import './robots'
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
  }

  onSearch = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (!robots.length) ?
    <h1 className='tc head'>Loading</h1> :
     (
      <div className="app">
        <div className='app-header'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearch} />
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }

}

export default App;
