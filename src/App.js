import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Details from "./components/Details";
import CatPost from "./components/CatPost";
import Error404 from "./components/Error404";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cat" element={<CatPost />} />
          <Route path = '/:id' element = {<Details/>}/>          
          <Route path = '*' element = {<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
