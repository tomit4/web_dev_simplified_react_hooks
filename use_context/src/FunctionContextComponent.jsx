import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

/* A more simple way to achive the same
 * results as the ClassContextComponent
 * example is to simply use the useContext hook
 * that takes the imported/exported ThemeContext
 * from App.jsx*/
export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',
    }

    return (
        <>
            <button type="submit" onClick={toggleTheme}>
                Toggle Theme
            </button>
            <div style={themeStyles}>Function Theme</div>
        </>
    )
}
