import './App.css';
import Navbar from './components.js/Navbar';
import Home from './components.js/Home';
import About from './components.js/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
