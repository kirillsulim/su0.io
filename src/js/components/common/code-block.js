import React from "react";


export default class CodeBlock extends React.Component {
    render() {
        return <textarea value={this.state.value} onChange={this.handleChange} />;
    }
}
