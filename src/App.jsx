import React, { Component } from 'react';
import Part1 from './components/Part1'
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';

export default class App extends Component{

  constructor(props){
    super(props)
    console.log('props',props)
    console.log('hash',window.location)
    console.log('localStorage',window.localStorage)
  }
  render(){
    return (
      
      <div className="App-container">
        <Part1/>
        <Part2/>
        <Part3/>
        <Part4/>
      </div>
      
    );
  }
}
