import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/App.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js'
import Form from './components/Form/Form.js'


ReactDom.render(<Header />,document.getElementById("header"));
ReactDom.render(<Main />,document.getElementById("main"));
ReactDom.render(<Form />,document.getElementById("form"));
ReactDom.render(<Footer />,document.getElementById("footer"));

