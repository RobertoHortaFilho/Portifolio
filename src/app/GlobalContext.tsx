'use client'
import { createContext, useState } from "react"
import { PropsWithChildren } from "react"

interface contextTheme {
  theme: string;
  setTheme: Function;
}

// export const ThemeContext = createContext({})
export const ThemeContext = createContext<contextTheme>({
  theme: '',
  setTheme: () => {}
})

export default function GlobalContext(props: PropsWithChildren) {
  const [theme, setTheme] = useState('dark')


  return (
    <div className={`back-${theme}`}>
      <ThemeContext.Provider value={{theme, setTheme} as contextTheme}>
        {props.children}
      </ThemeContext.Provider>
    </div>
    )
}