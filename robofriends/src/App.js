import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import './robots'
import robots from './robots';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearch = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
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
