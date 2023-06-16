'use client'
import { createContext } from "react"
import { PropsWithChildren } from "react"

const ThemeContext = createContext<string>('white')

export default function GlobalContext(props: PropsWithChildren) {
  return (
    <div>
      <ThemeContext.Provider value='dark'>
        {props.children}
      </ThemeContext.Provider>
    </div>
    )
}