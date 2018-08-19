import React, {Component} from "react";
import ReactDOM from "react-dom";
import cowsay, {say} from "cowsay";
import faker from "faker";


import './style/app.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: say({
                text: faker.fake("({{lorem.sentence}})")
            }),
        };
        this.fakeStuff = this.fakeStuff.bind(this);
    }
    getContent(){
        return <pre>{this.state.content}</pre>
    }
    fakeStuff(){
        let lorem = faker.lorem.sentence(6);
        const content = say({text:lorem});
        this.setState({content});
    }
    render() {
        return <div className="App">
            <h1>Generate Cowsay Lorem</h1>
            {this.getContent()}
            <button onClick={this.fakeStuff}>Click Me</button>
        </div>
    }
}


ReactDOM.render(<App />, document.getElementById('root'))