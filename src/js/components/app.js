import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import Article from './common/block-document-view';
import PostEditForm from './blog/post-edit';


const Index = () => <h2>Index</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const Test = () => <PostEditForm />;

export default class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Router>
                <div className="container">
                    <Route path="/" exact component={Test} />
                </div>
            </Router>
            <Footer />
        </div>;
    }
}
