import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import Article from './common/md-document-view';
import TextInput from './common/text-input';


const Index = () => <h2>Index</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const Test = () => <Article />;

export default class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Router>
                <div>
                    <Route path="/" exact component={Test} />
                </div>
            </Router>
            <Footer />
        </div>;
    }
}
