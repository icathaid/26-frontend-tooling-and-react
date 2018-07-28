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
  upHandler() {
    const counter = this.state.counter + 1;
    if (counter < 0) {
      this.setState({
        polarity: 'negative'
      })
    }
    else if (counter > 0) {
      this.setState({
        polarity: 'positive'
      })
    }
    else {
      this.setState({
        polarity: 'neutral'
      })
    }
    this.setState({
      counter: counter
    });
    this.setState({
      counter: counter,
    });
  }
  downHandler() {
    const counter = this.state.counter - 1;
    if(counter < 0){
      this.setState({
        polarity: 'negative'})
    }
    else if(counter > 0){
      this.setState({
        polarity: 'positive'
      })
    }
    else {
      this.setState({
        polarity: 'neutral'})
    }
    this.setState({
      counter: counter
    });
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
