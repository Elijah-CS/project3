import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home.js';
import { Expenses } from './Expenses.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>

    </div>
  );
}

export default App;