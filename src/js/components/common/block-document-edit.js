import React from "react";


export default class BlockDocumentEdit extends React.Component {
    render() {
        return <form className="block-document-edit" onSubmit={this.props.onSubmit}>
            <div>
                <textarea 
                    className="block-document-edit__textarea"
                    rows="10"
                    value={this.props.value} 
                    onChange={this.props.onChange} 
                />
            </div>
            <button className="button">Submit</button>
        </form>;
    }
}
