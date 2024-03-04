import './App.css'
import Card from './components/Card.jsx';
import ThemeBtn from './components/ThemeBtn.jsx';
import { ThemeProvider } from './context/Theme.js'
import { useState, useEffect } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = ()=> {
    setThemeMode("dark")
  }

  const lightTheme = ()=> {
    setThemeMode("light")
  }

  useEffect(() => {
    const bodyTheme = document.querySelector('html')
    bodyTheme.classList.remove('dark', 'light')
    bodyTheme.classList.add(themeMode)
  }, [themeMode]);

  return (
  <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        {/* themebtn */}
        <ThemeBtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
        {/* card */}
        <Card/>
      </div>
    </div>
  </div>
  </ThemeProvider>
  )
}

export default App
