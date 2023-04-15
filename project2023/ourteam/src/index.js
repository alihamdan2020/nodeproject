
import ReactDOM  from 'react-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './style.css'


ReactDOM.render(<Header />,document.querySelector('header'));
ReactDOM.render(<Main />,document.querySelector('main'));

const foot=ReactDOM.createRoot(document.querySelector('footer'));
foot.render(<Footer />,)


