import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import FunctionalComp from './components/FunctionalComp';
import ClassComp from './components/ClassComp';

export class App extends React.Component {
  render() {
    return (
      <div> 
        <Route></Route>
        <h1>Hello World......</h1>
        <FunctionalComp/>
        <ClassComp/>
      </div>
    )
  }
}

export default App;