import {Header, Footer, Container, Hero, Most} from './Components/imports'
// Here i import the 3 exported default from importScripts.js instead of writin 3 import 

function App(){
  return(
    <>
    <Header/>
    <Container>
      <Hero/>
      <Most/>
    </Container>
    <Footer />
    </>
  )
}
export default App;
