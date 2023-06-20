"use client"
import { useState } from 'react'
import NavBarMain from './MainComponents/NavBarMain'
import ContentController, {TItems} from './MainComponents/ContentController'
import './globalStyle.css'
import GenerateClassName from '../utils/GenerateClassName'

const Main = () => {
    const [selectedMain, setSelectedMain] = useState<TItems>('sobre')

    return (
        <div className={GenerateClassName('mainBody bordas', 'border')}>
            <NavBarMain selected={selectedMain} setSelected={setSelectedMain}/>
            <ContentController selectItem={selectedMain} setSelected={setSelectedMain}/>
        </div>
    )
}


export default Main