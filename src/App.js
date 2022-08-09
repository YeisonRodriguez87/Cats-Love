import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = '*' element = {<h1>PAGE NOT FOUND!!!</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
