import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Create,Update,List } from './components';
import Lit from './components/ListUser';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <h1>CRUD REACT app to create and update users using API PHP</h1>
    <ul>
      <li><Link to="/" className='a'>List of Users</Link></li>
      <li><Link to="/users/create" className='a'>Create Users</Link></li>
      <li><Link to="/users/update" className='a'>Update User</Link></li>
    </ul>
    </div>
    <Routes>
      <Route path="/" element={<List/>}></Route>
      <Route path="/users/create" element={<Create/>}></Route>
      <Route path="/users/update" element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
