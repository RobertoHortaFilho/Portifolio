"use client"
import Image from "next/image";
import './badgeItem.css'
import { ReactElement, useState } from 'react'
import generateClassName from "@/utils/GenerateClassName";
interface IProps {
  children: ReactElement[];
  src: string;
}

const BadgeItem = ({children, src} :IProps) => {
  const [description, setDescription] = useState(false)
  return (
    <div
      className="containerBadge"
      onMouseEnter={() => setDescription(true)}
      onMouseLeave={() => setDescription(false)}
    >
      {description && (
        <div className={generateClassName('popUp-badge', 'back-gray')}>
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