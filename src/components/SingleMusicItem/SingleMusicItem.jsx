import React, { useEffect, useState } from 'react'
import { useMusics } from '../../store/providers/musics'
import PlayPauseIcon from '../icons/PlayPauseIcon'
import st from './SingleMusicItem.module.css'
export default function SingleMusicItem({info, onSelect}) {
    const {state} = useMusics()
    const [isPlaying, setIsPlaying] = useState(false)
    const onPlay=(id)=>{
        onSelect(id)
    }
    useEffect(()=>{
        if(state.current===info.id){
            setIsPlaying(false)
        }else{
            setIsPlaying(true)
        }
    }, [state, info])
   

    const ItemStyle = {
        transition:'transform 1s ease'
        
     }
    return (
        <div style={ItemStyle} onClick={()=>{onPlay(info.id)}} className={st.container}>
            <div className={st.play}>
                <div >
                    <PlayPauseIcon isPlay={isPlaying} />
                </div>
            </div>
            <div className={info}>
                <div className={st.music_name}>
                    {info.name}
                </div>
                <div className={st.artist_name}>
                    {info.artist}
                </div>
            </div>
        </div>
    )
}
