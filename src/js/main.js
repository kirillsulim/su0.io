import React from "react";
import ReactDOM from "react-dom";

import App from './components/app';

import '../style/main.scss';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.css'


ReactDOM.render(<App />, document.getElementById('root'));
