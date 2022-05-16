import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/style.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

import "./assets/css/aos.css";
import "./assets/css/slick.css";
import "./assets/css/default.css";
import "./assets/css/animate.css";
import "./assets/css/style-two.css";
import "./assets/css/responsive.css";
import "./assets/css/slick-theme.css";
import "./assets/css/fontawesome.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
