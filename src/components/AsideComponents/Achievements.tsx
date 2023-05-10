import Image from 'next/image'
import './achievements.css'
import BadgeItem from './BadgeItem'

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
				<BadgeItem>
					<p className="popUp-title">Titulo</p>
					<p className="popUp-desc">descricao sobre o que esse badge siguinifica e como foi "conquistada"</p>
				</BadgeItem>
				<BadgeItem>
					<p className="popUp-title">Titulo</p>
					<p className="popUp-desc">descricao sobre o que esse badge siguinifica e como foi "conquistada"</p>
				</BadgeItem>
				<BadgeItem>
					<p className="popUp-title">Titulo</p>
					<p className="popUp-desc">descricao sobre o que esse badge siguinifica e como foi "conquistada"</p>
				</BadgeItem>
			</div>
		</div>
	)
}

export default Achivements