import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
// import ClassContextComponent from './ClassContextComponent'
import { ThemeProvider } from './ThemeContext'

export const ThemeContext = React.createContext()

export default function App() {
    /* In this essential example, useContext is utilized to pass
     * the darkTheme State to other Components, specifically
     * the FunctionContextComponent and the ClassContextComponent */
    return (
        <>
            <ThemeProvider>
                <FunctionContextComponent />
                {/*<ClassContextComponent />*/}
            </ThemeProvider>
        </>
    )
}
