// Import for libraries
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Import for css
import './App.css';

// Imports for pages
import Home from './pages/Home';
import UserDetails from './pages/UserDetails'
import AudioSample from './pages/AudioSample';
import ThankYou from './pages/ThankYou';

import { FirebaseConfig } from './config/config';
import {initializeApp} from 'firebase/app';



function App() {
  initializeApp(FirebaseConfig);

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/details" element={<UserDetails/>}/>
       <Route path="/record" element={<AudioSample/>}/>
       <Route path="/end" element={<ThankYou/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
