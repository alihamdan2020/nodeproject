import react  from 'react'
import ReactDOM  from 'react-dom'
import Header from './Header'
import Main from './Main'
import './style.css'


ReactDOM.render(<Header />,document.querySelector('header'));
ReactDOM.render(<Main />,document.querySelector('main'));
