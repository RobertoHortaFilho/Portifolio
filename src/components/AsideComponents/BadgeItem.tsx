"use client"
import Image from "next/image";
import './badgeItem.css'
import { ReactElement, useContext, useState } from 'react'
import { ThemeContext } from "@/app/GlobalContext";


interface IProps {
  children: ReactElement[];
  src: string;
}

const BadgeItem = ({children, src} :IProps) => {
  const [description, setDescription] = useState(false)
  const GenerateClassName = (classes: string, type:string) => {
    const theme = useContext(ThemeContext)
    return `${classes} ${type}-${theme.theme}`
  }
  return (
    <div
      className="containerBadge"
      onMouseEnter={() => setDescription(true)}
      onMouseLeave={() => setDescription(false)}
    >
      {description && (
        <div className={GenerateClassName('popUp-badge', 'back-gray')}>
          {children}
        </div>
      )}
      <Image
        className="ImageBadge"
        src={src}
        alt='Medalha'
        width={250}
        height={250}
      />
    </div>
  )
}

export default BadgeItem