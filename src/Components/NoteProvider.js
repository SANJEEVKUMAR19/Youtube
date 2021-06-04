import React,{useState,createContext} from 'react';
import useLocalStorage from "use-local-storage";
export  const NoteContext = createContext();

export const NoteProvider = props=>{
    const[name,setName]=useState(false);
    const [term,setTerm]=useLocalStorage('','captain america');
    return (
        <NoteContext.Provider value={{value1:[name,setName], value2:[term,setTerm]}}>
            {props.children}
        </NoteContext.Provider>
            
        
    )
}


