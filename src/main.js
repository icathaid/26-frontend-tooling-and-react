import React from "react";
import ReactDOM from "react-dom";

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      polarity: 'neutral'
    };
    this.upHandler = this.upHandler.bind(this);
    this.downHandler = this.downHandler.bind(this);
    this.clear = this.clear.bind(this);
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
  clear() {
    this.updateState(0);
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.upHandler}>up</button>
        <p className={this.state.polarity}>{this.state.counter}</p>
        <button onClick={this.downHandler}>down</button>
        <h1 className={this.state.polarity}>{this.state.polarity}</h1>
        <button onClick={this.clear}>clear</button>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);