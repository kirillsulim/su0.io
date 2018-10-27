import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './header';
import Footer from './footer';


const Index = () => <h2>Index</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

export default class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about/">About</Link></li>
                            <li><Link to="/users/">Users</Link></li>
                            <li><Link to="/users/smoo">Users smoo</Link></li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" exact component={About} />
                    <Route path="/users/" exact component={Users} />
                    <Route path="/users/smoo" exact component={About} />
                </div>
            </Router>
            <Footer />
        </div>;
    }
}
