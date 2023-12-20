import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Main } from './day2/Main/Main';
import { Topbar } from './day2/Topbar/Topbar';
import { View } from './day2/View/View';
import { Edit } from './day2/Edit/Edit';
import { Signup } from './day3/Signup/Signup';
import { Login } from './day3/Login/Login';
import { Viewuser } from './day2/View/Viewuser';
import { Edituser } from './day2/Edit/Edituser';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/topbar' element={<Topbar/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/viewuser/:id' element={<Viewuser/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/edituser/:id' element={<Edituser/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
