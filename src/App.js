import './App.css';
import SiteLayout from './layouts/SiteLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout/>}>
      </Route>
    </Routes>
  );
}

export default App;
