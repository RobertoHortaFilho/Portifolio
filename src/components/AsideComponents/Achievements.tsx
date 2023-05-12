import Image from 'next/image'
import './achievements.css'
import BadgeItem from './BadgeItem'
import data from '@/utils/badgesData'


const Achivements = () => {
	return (
		<div className='containerA'>
			<div className='titleContainer'>
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
			</div>
			<div className='badges-Container'>
				{data.map( item => (
					<BadgeItem src={item.src} key={item.title}>
						<p className="popUp-title">{item.title}</p>
						<p className="popUp-desc">{item.description}</p>
					</BadgeItem>
				))}
			</div>
		</div>
	)
}

export default Achivements