import Image from 'next/image'
import './achievements.css'
import BadgeItem from './BadgeItem'

const Achivements = () => {
    return (
        <div className='containerA'>
            <p className='titleContainer'>
                <div className='badgesContainer'>
                    <Image 
                        src='/icons/badge2.png'
                        alt='badge'
                        width={24}
                        height={24}
                        className='badge'
                    />    
                </div>
                <p className='title'>Conquistas</p>
            </p>
            <div className='badges-Container'>
                <BadgeItem />
                <BadgeItem />
                <BadgeItem />
                <BadgeItem />
                <BadgeItem />
            </div>
        </div>
    )
}

export default Achivements