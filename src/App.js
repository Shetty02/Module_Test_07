import './App.css';
import Header from './component/Layout/Header';
import Home from './component/Pages/Home';
import Footer from './component/Layout/Footer';
import MyContext from './Context';
import { useState } from 'react';

function App() {
  const[count,setCount] = useState(0);
  return (
    <MyContext.Provider value={{count,setCount}}>
            <Header/>
             <Home/>        
           <Footer/>
    </MyContext.Provider>
  );
}

export default App;
