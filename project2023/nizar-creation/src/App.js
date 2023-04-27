
import{Header,Container,Footer,Home,About} from './compo/index'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import './main.css'

function App(){
return(
  <>
  <Router>
  <Header/>
  <Container>
  <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          
  </Routes>
  </Container>
  <Footer/>
  </Router>
  </>

)
}
export default App