import { useState } from 'react';
import './App.css';
//import Navbar from "./components/Navbar" 
import Affiche from './components/Affiche';
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
        <div className="overflow-x-hidden">
        <Affiche/>
      </div>
  )
}

export default App
