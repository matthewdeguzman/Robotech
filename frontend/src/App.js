import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CreateSchedule from './components/CreateSchedule';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-schedule" element={<CreateSchedule />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
