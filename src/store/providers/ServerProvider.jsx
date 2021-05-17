import React, {  createContext, useContext, useState } from 'react'
const Context = createContext()
export default function ServerProvider({children}) {
    const [server, setServer] = useState('https://musicapage.000webhostapp.com')
    return (
        <Context.Provider value={{server, setServer}}>
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

export const useServer =()=>{
    const {server, setServer} = useContext(Context)
    return {server, setServer} 
 }
