import React from "react";
import ReactDOM from "react-dom";

import '../style/main.scss';


class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function tick() {
    const element = (
        <div>
            <Welcome name="Wiss" />
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 500);
