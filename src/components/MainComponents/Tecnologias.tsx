import './tecnologias.css'
import TecnologiaItem from './TecnologiaItem'
import data from '@/utils/tecnologyData'

const Tecnologias = () => {
  return (
    <div className='tec-flex-container'>
      {data.map((i, j) => <TecnologiaItem item={i} key={j}/>)}
    </div>
  )
}

export default Tecnologias
