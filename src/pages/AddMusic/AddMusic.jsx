import axios from 'axios'
import React, { useRef, useState } from 'react'
import st from './AddMusic.module.css'
export default function AddMusic() {
    
    const nameRef = useRef()
    const artistRef = useRef()
    const fileRef = useRef()
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const handleSubmit= async ()=>{
        
        const formInfo = new FormData()
        formInfo.append('name', nameRef.current.value)
        formInfo.append('artist', artistRef.current.value)
        formInfo.append('url', "asdasd")
        formInfo.append('file1', fileRef.current.files[0])

        await axios.post('https://muzikpage.000webhostapp.com/api/muzik/add-muzik', formInfo, {
            
        }).then(()=>{
            clearForm()
            setIsSuccess(true)
            setTimeout(()=>{
                setIsSuccess(false)
            }, 5000)
        })

        .catch(()=>{
            setIsError(true)
            setTimeout(()=>{
                setIsError(false)
            }, 5000)
        })

    }
    const clearForm=()=>{
        nameRef.current.value=""
        artistRef.current.value=""
        fileRef.current.value=""
    }
    return (

        <div  className={st.container}>
            <div className={st.inputFields}>
                
                <div  className={st.error} style={{visibility:isError ? "visible" : 'hidden',opacity:isError ? 1 : 0}} >Something went wrong</div>
                <div className={st.success} style={{visibility:isSuccess ? "visible" : 'hidden', opacity:isSuccess ? 1 : 0}} >Musiqa yuklandi</div>
                <div  className={st.title}>Musiqa qo'shish </div>
                    <div className={st.inputItem}>
                        <label >Nomi</label><input ref={nameRef} type="text" placeholder="Qo'shiq nomini kiriting ... " />
                    </div>
                    <div className={st.inputItem}>
                        <label >Ijrochi</label><input ref={artistRef} type="text" placeholder="Kiriting kiriting ... " />
                    </div>

                    <div 
                        className={st.inputItem}>
                        <label>Fayl kiriting (Faqat bitta fayl tanlash mumkin:mp3)</label>
                            <input type="file" accept="audio/*" ref={fileRef}  placeholder="fayl kiriting .."/>
                    </div>
                    <div className={st.inputItemSubmit}> <button onClick={handleSubmit} className={st.submitBtn}>Jo'natish</button> </div>
            </div>
        </div>
    )
}
