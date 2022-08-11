import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Details from "./components/Details";
import CatPost from "./components/CatPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path = '/:id' element = {<Details/>}/>
          <Route path="/cat" element={<CatPost />} />
          <Route path = '*' element = {<h1>PAGE NOT FOUND!!!</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
