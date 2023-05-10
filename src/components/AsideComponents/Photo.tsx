'use client'
import { useState } from 'react';
import './photo.css'
import Image from "next/image";


const Photo = () => {
  const [status, setStatus] = useState(false)
  return (
    <div className="containerPhoto">
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
          <div className='status-popUp'>
            <p className='status-popUp-text'>O importante é fazer o que você consegue a cada dia!</p>
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
