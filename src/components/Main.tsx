"use client"
import { useContext, useState } from 'react'
import NavBarMain from './MainComponents/NavBarMain'
import ContentController, {TItems} from './MainComponents/ContentController'
import './globalStyle.css'
import { ThemeContext } from '@/app/GlobalContext'

const Main = () => {
    const [selectedMain, setSelectedMain] = useState<TItems>('sobre')
    const GenerateClassName = (classes: string, type:string) => {
        const theme = useContext(ThemeContext)
        return `${classes} ${type}-${theme.theme}`
      }

    return (
        <div className={GenerateClassName('mainBody bordas', 'border')}>
            <NavBarMain selected={selectedMain} setSelected={setSelectedMain}/>
            <ContentController selectItem={selectedMain} setSelected={setSelectedMain}/>
        </div>
    )
}


export default Main