import React from "react";


class BlockDocumentError extends Error {

}

class Paragraph extends React.Component {
    render() {
        return <p>{this.props.content}</p>
    }
}

class Header extends React.Component {
    render() {
        switch(this.props.level) {
            case 1: return <h1 className="title is-1">{this.props.content}</h1>;
            case 2: return <h2 className="title is-2">{this.props.content}</h2>;
            case 3: return <h3 className="title is-3">{this.props.content}</h3>;
            case 4: return <h4 className="title is-4">{this.props.content}</h4>;
            case 5: return <h5 className="title is-5">{this.props.content}</h5>;
            case 6: return <h6 className="title is-6">{this.props.content}</h6>;
            default: throw BlockDocumentError(`Invalid level value {this.props.level}`);
        }
    }
}

Header.defaultProps = {
    level: 1
}

class Image extends React.Component {
    render() {
        let imgBlock = <img src={this.props.src} />;
        let labelBlock = this.props.label ? <figcaption>{this.props.label}</figcaption> : '';
        return <figure>
            {imgBlock}
            {labelBlock}
        </figure>;
    }
}

export default class BlockDocumentView extends React.Component {
    render() {
        let strs = [
            {
                type: "Header",
                content: "Abc"
            },
            {
                type: "Paragraph",
                content: "Abc"
            },
            {
                type: "Paragraph",
                content: "Abc"
            },
            {
                type: "Image",
                src: "https://upload.wikimedia.org/wikipedia/ru/2/24/Lenna.png",
                label: "Image example"
            }
        ];

        var blocks = [];
        strs.forEach(element => {
            switch(element.type) {
                case "Header":
                    blocks.push(<Header level={element.level} content={element.content} />)
                    break;
                case "Paragraph":
                    blocks.push(<Paragraph content={element.content} />);
                    break;
                case "Image":
                    blocks.push(<Image src={element.src} label={element.label} />)
                    break;
                default: throw BlockDocumentError(`Unknown block type ${element.type}`);
            }
        })


        return <div>
            {blocks}
        </div>;
    }
}
