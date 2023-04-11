import react from 'react'
import Header from './Header'
import Title from './Title'
import Main from './Main'
import Categories from './Categories'
import List from './List'
import Cat from './Category'
import Home from './Homemenu'

class App extends react.Component{
render() {

  
  return(
    <div>
    <Header />
    <Title title="All Products" />
    <Main />
    <Title title="All Categories" />
    <Categories />
    <Title title="Using Functions" />
    <List info={Cat} title="Categories"/>
    <List info={Home} title="Home menu"/>
    </div>
  )
}

}

export default App