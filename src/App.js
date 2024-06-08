import { Route, Routes } from 'react-router-dom';
import './App.css';
import Part1 from './features/Part1';
import Game1 from './features/Game1';
import Game2 from './features/Game2';
import Game3 from './features/Game3';
import Game4 from './features/Game4';
import Game5 from './features/Game5';
import Intro from './features/Intro';
import AudioPlayer from './features/AudioPlayer';
import PlaySoundComponent from './features/PlaySound';
import masterData  from './features/data'

function App() {

  return (
    <div className="App">
      {/* {<PlaySoundComponent path={masterData.part1.path}/>} */}
      {/* <AudioPlayer soundFile= '/sound/game.mp3' /> */}

      <Routes>
        <Route path="/intro" Component={Intro}/>
        <Route path="/part1" Component={Part1}/>
        <Route path="/game1" Component={Game1}/>
        <Route path="/game2" Component={Game2}/>
        <Route path="/game3" Component={Game3}/>
        <Route path="/game4" Component={Game4}/>
        <Route path="/game5" Component={Game5}/>
      </Routes>
    </div>
  );
}

export default App;
