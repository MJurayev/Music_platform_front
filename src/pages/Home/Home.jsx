import SingleMusicItem from '../../components/SingleMusicItem/SingleMusicItem'
import { useMusics } from '../../store/providers/musics'
import * as musics from '../../store/actions/musics'
import LoaderInner from '../../components/LoaderEffect/LoaderInner'
import st from'./Home.module.css'
export default function Home() {
    const {state, dispatch} = useMusics()

    const setCurrent=(id)=>{
        dispatch({type:musics.SET_CURRENT_MUSIC, payload:id})
    }
    return (
        <div className={st.container}>
            <LoaderInner isLoading={state.isLoading} />
            { (state.musics.length>0 ? state.musics.map((item, key)=>{
                return <SingleMusicItem onSelect={setCurrent} info={item} key={key} />
            }) : <div style={{zIndex:-1}}>No musics found</div>)}
        </div>
    )
}
