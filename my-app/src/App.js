import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js"; 
import WorksCited from './components/WorksCited.js'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bib" element={<WorksCited/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
