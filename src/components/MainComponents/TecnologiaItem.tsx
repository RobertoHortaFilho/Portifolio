import Image from 'next/image'
import './tecnologiaItem.css'
import { ITecnologyItem } from '@/utils/tecnologyData'

interface IProps {
  item: ITecnologyItem
}

const TecnologiaItem = ({item}: IProps) => {
  return(
    <div className='container-tec-item'>
      <Image
        className={`image-tec-item ${item.bg && 'image-tec-item-bg'}`}
        src={item.src}
        alt={item.name}
        width={100}
        height={100}
      />
      <p className='text-tec-item'>{item.name}</p>
    </div>
  )
}

export default TecnologiaItem
