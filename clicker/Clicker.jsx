//import logo from './logo.svg';
import React, {Component} from 'react';

class App extends Component {
  
    state = {
      count: 0,
       
    };
  
  increment = () => {
    this.setState ({count: this.state.count +1})
  }; 

  decrement = () => {
    this.setState ({count: this.state.count -1})
  }; 

  render () {
    return (
      <div className='App' style={{margin: "auto", widht: "300 px"}}>
        
  
        <button onClick={this.decrement}> - </button>
        <span style={{margin: "0 0.75 rem", display: 'inline-block'}}>
          {this.state.count}
        </span>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }

}
export default App;

