import React from "react";
import ReactDOM from "react-dom";

import './style/app.scss';

class App extends React.Component {
    render() {
        return 'Hola';
    }
}

ReactDOM.render(<App />, document.getElementById('root'))