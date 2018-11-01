import React from "react";


export default class TextInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <textarea value={this.state.value} onChange={this.handleChange} />;
    }
}
