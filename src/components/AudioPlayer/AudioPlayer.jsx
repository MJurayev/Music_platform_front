import React from 'react';
import AudioPlayer from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css'
import { useMusics } from '../../store/providers/musics';
import * as actions from '../../store/actions/musics'
import { useServer } from '../../store/providers/ServerProvider';
export default function AudioPl({current}) {
  
  const { dispatch} = useMusics()
  const {server} = useServer()
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
     src={current ? `${server}${current.file}` : ''}
     onClickPrevious={()=>{prewMusic()}}
     onClickNext={()=>{endMusic()}}
     onEnded={()=>{endMusic()}} />
    </>
  );
}
