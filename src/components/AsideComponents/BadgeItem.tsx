"use client"
import Image from "next/image";
import './badgeItem.css'
import { ReactElement, useState } from 'react'

interface IProps {
  children: ReactElement[];
}

const BadgeItem = ({children} :IProps) => {
  const [description, setDescription] = useState(false)
  return (
    <div
      className="containerBadge"
      onMouseEnter={() => setDescription(true)}
      onMouseLeave={() => setDescription(false)}
    >
      {description && (
        <div className="popUp-badge">
          {children}
          {/* <p className="popUp-title">Titulo</p>
          <p className="popUp-desc">descricao sobre o que esse badge sighunifica e como foi "conquistada"</p> */}
        </div>
      )}
      <Image
        className="ImageBadge"
        src='/images/Icon-anime.png'
        alt='Medalha'
        width={250}
        height={250}
      />
    </div>
  )
}

export default BadgeItem