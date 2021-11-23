import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home.js';
import { Expenses } from './Expenses.js';
import { Adding } from './Adding.js';
import { Update } from './Update.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/add" element={<Adding />} />
        <Route path="/update/:id/" element={<Update />} />
      </Routes>

    </div>
  );
}

export default App;

//scp -r build/* 137.184.74.148:project3