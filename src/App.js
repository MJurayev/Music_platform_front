import { BrowserRouter as Router, Route  ,Redirect} from "react-router-dom";
import Home from './pages/Home/Home';
import AudioPl from './components/AudioPlayer/AudioPlayer';

import st from  './App.module.css';
import { useMusics } from './store/providers/musics';
import { useEffect,useState } from 'react';
function App() {
  const [state] = useMusics()
  const [currentMusic, SetCurrentMusic] = useState()

  useEffect(()=>{
    const music =state.musics.find(x=>x.id===state.current ? x : '')
    SetCurrentMusic(music)
    window.localStorage.setItem('current_music' ,JSON.stringify(music))
  }, [state])
  return (
      
        <Router>
          <div className={st.container}>
            <div className={st.topContent}>
              <Route exact path="/"><Redirect to='/home' /></Route>
              <Route path="/home" ><Home /></Route>
            </div>
            <div className={st.audioContainer}>
              <AudioPl current={currentMusic || ''}/>
            </div>
          </div>
      </Router>
     
  );
}

export default App;
