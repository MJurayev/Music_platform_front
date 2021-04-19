import './App.css';
import {  useMusics } from './store/providers/musics';
import * as musics from './store/actions/musics';
import { useRef } from 'react';

function App() {
  const nameRef = useRef()
  const [state, dispatch] = useMusics()
  return (
    <div>
      <input type="text" ref={nameRef} placeholder="name..." />
      <button onClick={()=>{dispatch({type:musics.MUSICS_ADD, payload:nameRef.current.value}); nameRef.current.value=''} }>Add</button>
      {state.musics.length<=0 ? <div>No found musics</div> : state.musics.map((x, key)=>{
        return <div key={key}>
          <span>{x.id}</span><span>{x.name}</span><button onClick={()=>dispatch({type:musics.MUSICS_DELETE, payload:x.id})}> Delete</button>
          </div>
      })}
    </div>
  );
}

export default App;
