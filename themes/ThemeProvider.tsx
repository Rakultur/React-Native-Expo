import React, { createContext, useContext, useState } from "react"

import { customTheme } from "./custom"
import { darkTheme } from "./dark"
import { lightTheme } from "./light"

const ThemeContext = createContext<any>(null)

export function ThemeProvider({ children }: any) {

    const [theme, setTheme] = useState(customTheme)

    return (

        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                lightTheme,
                darkTheme,
                customTheme
            }}
        >

            {children}

        </ThemeContext.Provider>

    )

}

export function useTheme() {

    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider")
    }

    return context

}