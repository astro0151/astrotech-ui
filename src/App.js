//j llogo removed.................
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './Head';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Footer from './Footer';
import Login from './Login';
import Home from './Home'
import AdminHome from './AdminHome';



function App() {
  return (
    <div className="App">
      <div>
      <Head />
    
      <Routes>
           <Route path='/register' element={<Register/>} />
           <Route path='/login' element={<Login/>} />
           
           <Route path='/' element={<Home/>} />
           {/* <Route path='/adminlogin' element={<AdminHome/>} /> */}
     
          
           {/* <Route path='about' Component={About} /> */}
           {/* <Route path='/contact' element={<Contact/>} /> */}
      </Routes>
      </div>
      <AdminHome />
      <Footer />
      
    </div>
  );
}

export default App;
