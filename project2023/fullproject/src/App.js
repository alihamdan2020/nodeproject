import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
//as BrowserRoute long sentence we can give here an alias
import {Header, Footer, Container,MyFooter, Hero, Gaming} from './Components/index'
import {Home,Profile,ContactUs} from './Components/Pages/index'
import Movie from './Components/Movie/Movie';
// Here i import the 3 exported default from import.js instead of writin 3 import 
//since i called the file that contain whole exported components by index.js
//no nedd to said : './Components/index
//as domain name, index.html redirect open without name it
//i put from index.js for more explanation

function App(){
  return(
    <>
    {/* your project should be insite Router */}
    <Router>
      {/* header exist in all pages  */}
    <Header/>
    {/* content of container change */}
    <Container>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/contact' element={<ContactUs />}/>
      </Routes>
    </Container>
    {/* footer exist in all pages  */}
    <MyFooter />
    </Router>
    </>
  )
}
export default App;

//container contain the pages, all pages contain header,footer and content of container
//in home page content of container is HERO and MOST and GAMING

//before change
// <>
// <Header/>
// <Container>
//   <Hero />
//   <Most />
//   <Gaming />
// </Container>
// <MyFooter />
// </>