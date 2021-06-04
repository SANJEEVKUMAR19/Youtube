import React,{useEffect,useState,useContext} from 'react';
import '../styles/Content.css';
import { useHistory } from "react-router-dom";
import {NoteContext} from './NoteProvider';
import instance from './Api'
import {useRoutes,A,navigate,useQueryParams} from 'hookrouter';
import Stream from './Stream.jsx';

function Content() {
    const {value1,value2}=useContext(NoteContext);
    const [name,setName] = value1;
    const [term,setTerm] = value2;
    const [results,setResults]= useState({});
    const [videoCode,setVideoCode] = useState('');
    const [queryParams] = useQueryParams();
    const {qs} = queryParams;

   console.log(term);
    function searchItem(){
       const res =instance.get('/search?',{
         params: {
           q:queryParams.search_query
         }
       })
    
       return res;
    }
    async function searchResults(){
      const items = await searchItem();
      const r=items.data.items;
      setResults(r)
     
    }
   
    useEffect(()=>{searchResults()},[term])
    console.log(results);
 
     
   function ellipsfy(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
   }
   const history = useHistory();
  
    return (
      
        <div className='contents'>
            {results.length>0&&results.map((res,index)=>(
                 res.id.kind==='youtube#video'&&
            <div className='search-results'  onClick={()=>navigate(`/stream/${res.id.videoId}`)}>
             
            <img key={index} src={res.snippet.thumbnails.high.url} />
               <div className='description'>
                  <h4 style={{fontSize:'20px'}}>{res.snippet.title}</h4>
                  <h5 style={{fontSize:'15px'}}>{res.snippet.channelTitle}</h5>
                  <p>{ellipsfy(res.snippet.description,127)}</p>
                 
               </div>
               
            </div>
            ))}
                    
        </div>
        
    )
}

export default Content;
