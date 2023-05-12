"use client"
import { useState } from 'react'
import NavBarMain from './MainComponents/NavBarMain'
import ContentController, {TItems} from './MainComponents/ContentController'
import './globalStyle.css'

const Main = () => {
    const [selectedMain, setSelectedMain] = useState<TItems>('sobre')

    return (
        <div className='mainBody bordas'>
            <NavBarMain selected={selectedMain} setSelected={setSelectedMain}/>
            <ContentController selectItem={selectedMain}/>
        </div>
    )
}


export default Main