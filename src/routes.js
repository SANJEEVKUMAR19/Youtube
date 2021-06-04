import React from 'react';
import Stream from './Components/Stream.jsx';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar.jsx';
import Content from './Components/Content';
import App from './App.js';
import Context from './Context.js';

const routes =  {
  "/stream/:id": ({id})=> <Stream Id={id}/>,
 "/results": ()=> <Content />,
   
  "/": ()=> <Context/>
}

export default routes;
