
import './App.css';
import { useState } from 'react';
import SearchBox from './SearchBox';
import RobotList from './components/RobotList';
import { robots } from './robots';

function App() {
const [searchField, setSearchField]= useState('')
const onSearchChange = e => setSearchField(e.target.value)

// const filteredRobots =robots.filter((robot)=> robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
// robot.email.toLowerCase().includes(searchField.toLowerCase()) || robot.username.toLowerCase().includes(searchField.toLowerCase()) )

const data = ['name', 'email', 'username']

const filteredRobots = robots.filter((robot) => data.some(entry => robot[entry].toLowerCase().includes(searchField.toLowerCase())))

  return (
    <div className="tc">
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <RobotList  roboFilter = {filteredRobots}/>
      
      

      
    </div>
  );
}

export default App;
