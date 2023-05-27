
import{Header,Container,Footer,Home,About,Gallery,Admin,Service,ButtonToUp,Blog} from './compo/index'
import { HashRouter as Router,Route,Routes } from 'react-router-dom'

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
          <Route path='/gallery' element={<Gallery />}/>
          {/* note that service with no 's' at end, mean component that render all services */}
          {/* while in nav bar services is a link to same home page at section services */}
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
  </Routes>
  </Container>
  <Footer/>
  <ButtonToUp/>
  </Router>
  </>

)
}
export default App