import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SiteLayout from './layouts/SiteLayout';
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Search from './views/Search/Search'
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import ForgotPassword from './views/ForgotPassword/ForgotPassword';
import SiteLayoutAuth from './layouts/SiteLayoutAuth';
import { Route, Routes, Navigate } from 'react-router-dom';
import ResetPassword from './views/ResetPassword/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/search" element={<Search/>}/>
      </Route>
      <Route path="/auth" element={<SiteLayoutAuth/>}>
        <Route index element={<Navigate to='/auth/login' replace/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/signup" element={<Signup/>}/>
        <Route path="/auth/forgot-password">
          <Route index element={<ForgotPassword/>}/>
          <Route path="/auth/forgot-password/:key" element={<ResetPassword/>}/>
        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;
