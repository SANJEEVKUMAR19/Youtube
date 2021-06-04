import React,{useState,useContext}  from 'react';
import {NoteContext} from './NoteProvider';
import '../styles/Sidebar.css';
import * as IconsB from '@material-ui/icons';
function Sidebar() {
   const {value1,value2}=useContext(NoteContext);
   const [name,setName] = value1;
     const channels =['xyx','cyz','fuc','kin','pilip pilip','pilip pilip','abhistu','ashwin','tamil talkies','pilip pilip','abhistu','ashwin','tamil talkies','abhistu','ashwin','tamil talkies','Kodangi','Royal challengers bangalore','scummy oficial','pilip pilip','abhistu','ashwin','tamil talkies','pilip pilip','abhistu','ashwin','tamil talkies'];
     const [show,setShow] = useState('true');
     const [limit,setLimit] = useState('Show more');
   
     const slicing=(channels)=>{
      
      return channels.slice(0,4);
     
     }
     const handleShow=e=>{ 
          
          setShow(!show);
          if(show)
          setLimit('Show less');
          else{
          setLimit('Show more')
          }
      }
    return (
    
        <div className={'sidebar' }>
           <div  className={(!name&&'sidebar-contents')||'before-contents'}>
              
              <div className={'main'}>

                 <div className={'main-contents'}>                    
                      <icons ><IconsB.Home style={{color:'green',fontSize:'28px'}}/></icons> 
                      {(!name&&<span >Home</span> )||(<span className='before-span'>none</span>)}                   
                  </div>

                 <div className={'main-contents'}>
                    <icons><IconsB.Explore style={{color:'green',fontSize:'28px'}}/></icons> 
                    {(!name&&<span>Explore</span>)||(<span className='before-span'>none</span>)}                  
                 </div>

                 <div className={'main-contents'}>

                    <icons><IconsB.Subscriptions  style={{color:'green',fontSize:'28px'}}/></icons>
                    {(!name&&<span>Subscriptions</span>)||(<span className='before-span'>none</span>)}
                  </div>

                 </div>
              <div className={!name &&'videos-details'}>

                 <li><icons><IconsB.VideoLibrary style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Library</span>)||(<span className='before-span'>none</span>)}</li>
                 <li><icons><IconsB.History style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>History</span>)||(<span className='before-span'>none</span>)}</li>
                 <li><icons><IconsB.OndemandVideo style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Your videos</span>)||(<span className='before-span'>none</span>)}</li>
                 <li><icons><IconsB.WatchLater style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Watch Later</span>)||(<span className='before-span'>none</span>)}</li>
                 <li><icons><IconsB.ThumbUp style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Liked videos</span>)||(<span className='before-span'>none</span>)}</li>

              </div>
              <div className='subscriptions'>
                 
                   
                 { (show && slicing(channels)||channels).map((channel,index)=>(
                     <li key={index}>
                        <icons>
                           <IconsB.ThumbUp style={{color:'green',fontSize:'28px'}}/>
                           </icons>
                           {(!name&&<span>{channel}</span>)||(<span className='before-span'>none</span>)}
                     </li>
                     
                   
                   
                 ))}
                 <li onClick={handleShow} style={{display:'flex',alignItems:'center',}}><icons ><IconsB.KeyboardArrowDown style={{color:'grey',fontSize:'28px'}}/></icons>{(!name&&<span style={{color:'grey'}}>{limit}</span>)||(<span className='before-span'>none</span>)}</li>
              </div>
              <div className='More'>
                 <li><icons><IconsB.YouTube style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Youtube Premium</span>)||(<span className='before-span'>none</span>)}</li>
                 <li><icons><IconsB.Theaters style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Movies</span>)||(<span className='before-span'>none</span>)}</li>
                 <li><icons><IconsB.SportsEsports style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Gaming</span>)||(<span className='before-span'>none</span>)}</li>
                 <li><icons><IconsB.WifiTethering style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Live</span>)||(<span className='before-span'>none</span>)}</li>                
                 <li><icons><IconsB.EmojiObjects style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Learning</span>)||(<span className='before-span'>none</span>)}</li>
                 <li><icons><IconsB.EmojiEvents style={{color:'green',fontSize:'28px'}}/></icons>{(!name&&<span>Sports</span>)||(<span className='before-span'>none</span>)}</li>
                 
              </div>
              <div className='about'><p>About Press Copyright<br></br> 
              Contact us Creator<br></br> Advertise Developers<br></br>
TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
© 2021 Google LLC</p></div>
           </div>

        </div>
   
    )
}

export default Sidebar;
