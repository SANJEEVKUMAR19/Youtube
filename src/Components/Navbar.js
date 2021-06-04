import React,{useContext,useState} from 'react';
import {YoutubeFilled} from '@ant-design/icons'
import {NoteContext} from  './NoteProvider';
import '../styles/Navbar.css';
import SearchForm from './SearchForm.jsx';
import {A} from 'hookrouter'
function Navbar() {

  const {value1,value2}=useContext(NoteContext);
  const [name,setName] = value1;
    const handleChange=()=>{
            setName(!name)
    }
   
    return (
        <div className="navbar">
                
               <div className='ham' onClick={handleChange}>
                 <div className='bar'>
                   <div className='bar1'></div>
                   <div className='bar1'></div>
                   <div className='bar1'></div>
                  </div>
                 
               </div>
               <div className='icon'>
               <YoutubeFilled style={{ fontSize: '33px',marginLeft:'-10px', color:'rgb(0, 128, 0)',zIndex:'20',cursor:'pointer'}}/>
               <div className="youtube-icon"></div>
               </div>
               <div className='search'>
                  <SearchForm />
               
                  <A href="/stream">streams Page</A>
              </div>

        </div>
    )
}

export default Navbar
