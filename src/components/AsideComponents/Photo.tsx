'use client'
import { useContext, useState } from 'react';
import './photo.css'
import Image from "next/image";
import { ThemeContext } from '@/app/GlobalContext';


const Photo = () => {
  const [status, setStatus] = useState(false)
  const GenerateClassName = (classes: string, type:string) => {
    const theme = useContext(ThemeContext)
    return `${classes} ${type}-${theme.theme}`
  }
  return (
    <div className={GenerateClassName('containerPhoto', 'photo-border')}>
      <Image
        src="/images/perfil-picture.png"
        alt="picture-profile"
        className="photo"
        width={950}
        height={950}
      />
      <div
        className="iconeContainer"
        onMouseEnter={ () => setStatus(true)}
        onMouseLeave={ () => setStatus(false)}
      >
        {status && (
          <div className={GenerateClassName('status-popUp', 'back-gray')}>
            <p className='status-popUp-text'>O importante é dar um passo da caminhada a cada dia!</p>
          </div>
        )}
        <Image
          src="/icons/open-book.png"
          alt="icon book"
          className='icone'
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}

export default Photo
