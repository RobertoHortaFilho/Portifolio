import Image from 'next/image'
import './tecnologiaItem.css'
import { ITecnologyItem } from '@/utils/tecnologyData'

interface IProps {
  item: ITecnologyItem
}

const TecnologiaItem = ({item}: IProps) => {
  return(
    <div className='container-tec-item'>
      <div className={`container-tec-image ${item.bg && 'image-tec-item-bg'}`}>
        <Image 
          className='image-tec-item'
          src={item.src}
          alt={item.name}
          width={100}
          height={100}
        />
      </div>
      <p className='text-tec-item'>{item.name}</p>
    </div>
  )
}

export default TecnologiaItem
