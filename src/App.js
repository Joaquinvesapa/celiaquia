import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Recetas from './pages/Recetas';
import QuienSoy from './pages/QuienSoy';
import MasInfo from './pages/MasInfo';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Inicio/>}/>
        <Route path="contacto" exact element={<Contacto/>}/>
        <Route path="recetas" exact element={<Recetas/>}/>
        <Route path="quien-soy" exact element={<QuienSoy/>}/>
        <Route path="mas-info" exact element={<MasInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
