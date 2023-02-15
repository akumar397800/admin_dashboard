import React from 'react';
import './app.css'
import Sidebar from './components/Sidebar Section/Sidebar';
import Body from './components/Body section/Body';
import AdminPage from './components/AdminPage';



const App = () => {
  return (
    <div className='container'> 
    <Sidebar/>
      <Body />
      
    

    </div>
  )
}

export default App
