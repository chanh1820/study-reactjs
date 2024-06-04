import { Route, Routes } from 'react-router-dom';
import './App.css';
import Part1 from './features/Part1';
import Game1 from './features/Game1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/part1" Component={Part1}/>
        <Route path="/game1" Component={Game1}/>
      </Routes>
    </div>
  );
}

export default App;
