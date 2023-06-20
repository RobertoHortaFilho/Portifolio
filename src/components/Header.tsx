'use client'
import './header.css'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/app/GlobalContext'
import GenerateClassName from '@/utils/GenerateClassName'


const Header = () => {
    const theme = useContext(ThemeContext)
    const changeMode = () => {
        theme.setTheme(() => theme.theme == 'light' ? 'dark' : 'light')
    }
    return(
        <div className={GenerateClassName('header', 'back-gray')}>
            <Image
                src="/images/Icon-anime.png"
                alt="picture-profile"
                className='grayBack circleImage'
                width={40}
                height={40}
                priority
            />
            <h1 className={GenerateClassName('name', 'text')}>Roberto Alessandro Horta Filho</h1>
            <div className='darkContainer' onClick={changeMode}>
                <Image
                    src="/icons/dark.png"
                    alt="dark-mode"
                    className='imageDarkmode'
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}

export default Header