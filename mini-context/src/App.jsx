import './App.css'
import React, {useContext, useState} from 'react'
import UserContext from './context/UserContext.js'
import UserContextProvider from './context/UserContextProvider.jsx'
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx'
function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
