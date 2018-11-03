import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BlockDocumentEdit from '../common/block-document-edit';
import BlockDocumentView from '../common/block-document-view';


export default class PostEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.getBlocks = this.getBlocks.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    getBlocks() {
        let text = this.state.text;

        return [{
            type: "Paragraph",
            content: text
        }];
    }

    render() {
        return <Tabs>
            <div className="tabs">
                <TabList>
                    <Tab selectedClassName="is-active"><a>Markdown</a></Tab>
                    <Tab selectedClassName="is-active"><a>Preview</a></Tab>
                </TabList>
            </div>
            <TabPanel>
                <BlockDocumentEdit value={this.state.text} onChange={this.handleChange}/>
            </TabPanel>
            <TabPanel>
                <BlockDocumentView blocks={this.getBlocks()} />
            </TabPanel>
        </Tabs>;
    }
}
