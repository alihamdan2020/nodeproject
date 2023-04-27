
import{Header,Container,Footer,Home,About,Gallery} from './compo/index'
import {Link} from 'react-router-dom'
import { HashRouter as Router,Route,Routes } from 'react-router-dom'

import './main.css'

function App(){
return(
  <>
  <Router forceRefresh={true}>
  <Header/>
  <Container>
  <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/gallery' element={<Gallery />}/>
          
  </Routes>
  </Container>
  <Footer/>
  </Router>
  </>

)
}
export default App