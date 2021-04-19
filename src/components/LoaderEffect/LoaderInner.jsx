import React from 'react'
import st from './LoaderInner.module.css'
export default function LoaderInner({isLoading}) {
    const loaderStyle = {
        transition:'all .4s ease',
        opacity:isLoading ? 1 : 0,
        visibility:isLoading ? 'visible' : 'hidden'
    }
    return (
        <div style={loaderStyle} className={st.container}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
