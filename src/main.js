import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      polarity: 'neutral'
    };
    this.upHandler = this.upHandler.bind(this);
    this.downHandler = this.downHandler.bind(this);
  }
  updateState(counter){
    let polarity = 'neutral';
    if (counter < 0) {
      polarity = 'negative'
    }
    else if (counter > 0) {
      polarity = 'positive'
    }
    else {
      polarity = 'neutral'
    }
    this.setState({
      counter,
      polarity
    });
  }
  upHandler() {
    this.updateState(this.state.counter + 1);
  }
  downHandler() {
    this.updateState(this.state.counter - 1);
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.upHandler}>up</button>
        <p>{this.state.counter}</p>
        <button onClick={this.downHandler}>down</button>
        <h1>polarity:</h1>
        <h2>{this.state.polarity}</h2>
      </React.Fragment>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Counter</h1>
//     </div>
//   );

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);