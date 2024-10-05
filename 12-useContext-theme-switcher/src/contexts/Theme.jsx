import {createContext, useContext} from 'react'

//~ 1- creating context with some default value

export const ThemeContext = createContext({
    themeMode: "lisht",
    darkTheme: () => {},
    lightTheme: () => {}
})

//~ 2- creating context provider

export const ThemeProvider = ThemeContext.Provider

//~ 3- custom hook

export default function useTheme(){
    return useContext(ThemeContext)         //* now we don't use to import two things eg- from previous 11-mini-context we are importing  useContext as well as UserContext
}