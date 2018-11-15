import MarkdownIt from 'markdown-it';
import MdKatex from '@iktakahiro/markdown-it-katex'

const md = new MarkdownIt();
md.use(MdKatex);

export function parseBlocks(rawMdCode) {
    var result = [];
    let tokens = md.parse(rawMdCode, {});
    for (var i = 0; i < tokens.length; ++i) {
        let token = tokens[i];
        if (token.type === 'paragraph_open') {
            token = tokens[++i];
            result.push({
                type: 'Paragraph',
                content: token.content
            });
        }
        else if (token.type === 'paragraph_close') {
            /* skip */
        }
        else if (token.type === 'heading_open') {
            let level = token.tag ? Number(token.tag[1]) : undefined;
            console.log(level + " " + token.tag);
            token = tokens[++i];
            result.push({
                type: 'Header',
                level: level,
                content: token.content
            });
        }
        else if (token.type === 'heading_close') {
            /* skip */
        }
        else if (token.type === 'math_block') {
            result.push({
                type: 'Formula',
                code: token.content
            });
        }
        else {
            console.log(token);
        }
    }

    return result;
}