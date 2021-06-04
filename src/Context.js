import React from 'react'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar.jsx';
import Stream from './Components/Stream.jsx';
import Content from './Components/Content';
import {NoteProvider} from './Components/NoteProvider';


function Context() {
    return (
        <NoteProvider>
            <div className='context'>
              <Navbar />
              <Sidebar />
              <Content />
            </div>
        </NoteProvider>
    )
}

export default Context
