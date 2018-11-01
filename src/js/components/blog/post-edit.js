import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BlockDocumentEdit from '../common/block-document-edit';
import BlockDocumentView from '../common/block-document-view';


export default class PostEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
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
                <BlockDocumentEdit />
            </TabPanel>
            <TabPanel>
                <BlockDocumentView />
            </TabPanel>
        </Tabs>;
    }
}
