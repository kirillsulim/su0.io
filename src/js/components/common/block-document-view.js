import React from 'react';
import { BlockMath } from 'react-katex';
import hljs from 'highlight.js';


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

class Formula extends React.Component {
    render() {
        return <BlockMath>{this.props.code}</BlockMath>;
    }
}

class Code extends React.Component {
    render() {
        let code = hljs.highlight(this.props.lang, this.props.code, true).value;
        return <pre className="hljs">
            <code dangerouslySetInnerHTML={{__html: code}}></code>
        </pre>;
    }
}

Code.defaultProps = {
    lang: 'plaintext'
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
            },
            {
                type: "Formula",
                code: "\\int_0^\\infty x^2 dx"
            },
            {
                type: "Code",
                lang: "js",
                code: "import hljs from 'highlight.js/lib/highlight';\nimport javascript from 'highlight.js/lib/languages/javascript';\nhljs.registerLanguage('javascript', javascript);"
            }
        ];

        var result = [];
        var i = 0;
        this.props.blocks.forEach(element => {
            switch(element.type) {
                case "Header":
                    result.push(<Header key={i++} level={element.level} content={element.content} />)
                    break;
                case "Paragraph":
                    result.push(<Paragraph key={i++} content={element.content} />);
                    break;
                case "Image":
                    result.push(<Image key={i++} src={element.src} label={element.label} />)
                    break;
                case "Formula":
                    result.push(<Formula key={i++} code={element.code} />);
                    break;
                case "Code":
                    result.push(<Code key={i++} lang={element.lang} code={element.code} />);
                    break;
                default: throw BlockDocumentError(`Unknown block type ${element.type}`);
            }
        })

        return <div>
            {result}
        </div>;
    }
}
