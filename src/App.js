import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SiteLayout from './layouts/SiteLayout';
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import { Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/search" element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;
