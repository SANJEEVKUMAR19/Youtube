import React,{useState,useRef,useContext,useEffect}  from 'react';
import '../styles/Navbar.css';
import {NoteContext} from './NoteProvider';
import * as IconsB from '@material-ui/icons';
import {useRoutes,A,navigate} from 'hookrouter';
import { Link,BrowserRouter as Router } from 'react-router-dom';
function SearchForm() {
 const [value,setValue] = useState('');
 const {value1,value2}=useContext(NoteContext);
 const [term,setTerm] = value2;
 console.log(`term=${term}`);
 const handleChange=(e)=>{setValue(e.target.value)}
 const handleSubmit = async(e) =>{
      e.preventDefault();
      
     await setTerm(value);
   
      
 }

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <input 
                type='text' 
                placeholder='Search'
                id='search-input'
                value={value}
                onChange={handleChange}
                spellCheck={false}
                />
                  <button type='submit' onClick={()=>{ }} className='search-btn'><IconsB.SearchOutlined className='search-icon' /></button>
            </form>
              <button    onClick={()=>{ navigate('results',false,{search_query:term})}}>clickme</button>
        </div>
    )
}

export default SearchForm
