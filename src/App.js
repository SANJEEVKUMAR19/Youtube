import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar.jsx';
import Stream from './Components/Stream.jsx';
import Content from './Components/Content';
import {NoteProvider} from './Components/NoteProvider';
import {useRoutes,A} from 'hookrouter';
import routes from './routes.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  const routeResults = useRoutes(routes);
  return (
  
   <NoteProvider>
    <div className="App">
      <Navbar />
      {routeResults}
    </div>
 
    </NoteProvider>
  );
}

export default App;
