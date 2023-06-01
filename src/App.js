import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import Countries from './components/Countries.jsx';
import Activities from "./components/Activities";
import Footer from './components/Footer.jsx';
import SideBar from './components/SideBar';
import Loading from './components/Loading.jsx';
import DetailCountry from "./components/DetailCountry.jsx";
import Nav from './components/Nav';
import Form from './components/Form';
import Edition from './components/Edition';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  
  const {interruptor} = useSelector(state => state);
  const location = useLocation();

  
  const showComponent =()=>{
    if(location.pathname !== "/" && location.pathname !=="/loading" && 
    location.pathname !== "/login" && location.pathname !== "/login/register"){
      return true
    }
    return false
  }


  return (
    <div className="App">
      {showComponent() && <Nav/>}
      {(interruptor && location.pathname === "/countries") && <SideBar/>}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/register' element={<Register/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/loading' element={<Loading/>} />
        <Route path="/countries" element={<Countries/>}/>
        <Route path='/countries/detail/:id' element={<DetailCountry/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path='/activities/form' element={<Form/>}/>
        <Route path='/activities/edition/:id' element={<Edition/>} />
      </Routes>
      {showComponent() && <Footer/>}
    </div>
  );
}

export default App;
