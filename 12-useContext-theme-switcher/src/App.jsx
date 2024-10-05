import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'


function App() {
  //~ 5- defining valus and methods
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //~ 6- actual change in theme 

  useEffect(() => {
    const htmlTheme = document.querySelector('html')

    htmlTheme.classList.remove("light", "dark")

    htmlTheme.classList.add(themeMode)

  }, [themeMode])
  



  return (
    
    <>
      {/*//~ 4- import ThemeProvider and take & define values from it */}
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
        </div>
      </ThemeProvider>

      
    </>
  )
}

export default App
