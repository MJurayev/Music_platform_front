import React from 'react';
import AudioPlayer from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css'
import { useMusics } from '../../store/providers/musics';
import * as actions from '../../store/actions/musics'
export default function AudioPl({current}) {
  
  const [state, dispatch] = useMusics()
  function prewMusic(){
    dispatch({type:actions.SET_STEP_MUSIC_TO_CURRENT, payload:-1})
  }
  function endMusic(){
    dispatch({type:actions.SET_STEP_MUSIC_TO_CURRENT, payload:1})
  }
  return (
    <>
     <AudioPlayer 
     header={ <div>{current.artist} - {current.name}</div>}
    //  footer={ <div>Footer</div>}
     showSkipControls={true}
     style={{height:'100%'}}
     src={current.url}
     onClickPrevious={()=>{prewMusic()}}
     onClickNext={()=>{endMusic()}}
     onEnded={()=>{endMusic()}} />
    </>
  );
}
