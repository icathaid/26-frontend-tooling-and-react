import React, {Component} from "react";
import ReactDOM from "react-dom";
import cowsay, {say} from "cowsay";
import faker from "faker";
import superagent from "superagent";

import './style/app.scss';

const pokemonAPI = 'https://www.pokeapi.co/api/v2/pokemon/';

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
    randomNumber(){
        let result = Math.floor((Math.random() * 100) + 1);
        if(result > 57){
            return alert('LOSS');
        }
        else return alert('WIN');
    }
    testAPI(){
        let bill = {
            "key":"value",
            'foo':'bar',
            test:42
        }
        let search = 'ivysaur';
        let url = `${pokemonAPI}${search}`;
        let ted = superagent.get(url)
            .then(result => {
                return result.body;
            });

        return console.log(ted.value);
    }
    render() {
        return <div className="App">
            <h1>Generate Cowsay Lorem</h1>
            {this.getContent()}
            <button onClick={this.fakeStuff}>Click Me</button>
            <button onClick={this.randomNumber}>Random</button>
            <button onClick={this.testAPI}>API</button>
        </div>
    }
}


ReactDOM.render(<App />, document.getElementById('root'))