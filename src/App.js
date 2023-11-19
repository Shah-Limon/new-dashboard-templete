import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/Shared/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './components/Shared/Footer/Footer';
import Dashboard from './Pages/Dashboard';
import RequireAuth from './components/Shared/RequireAuth';
import Form from './Pages/Form';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        
     
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
