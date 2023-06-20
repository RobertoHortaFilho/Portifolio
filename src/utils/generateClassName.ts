'use client'
import { useContext } from "react"
import { ThemeContext } from "@/app/GlobalContext"

const GenerateClassName = (classes: string, type:string) => {
  const theme = useContext(ThemeContext)
  return `${classes} ${type}-${theme.theme}`
}

export default GenerateClassName