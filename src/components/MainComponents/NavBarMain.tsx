import './navBarMain.css'
import generateClassName from '@/utils/generateClassName';

interface IProps {
  setSelected: Function;
  selected: string
}

const NavBarMain = ({selected, setSelected} : IProps) => {
  return (
    <div className="container-navBarMain">
      <p
        className={`${generateClassName('link-button leftLink ', 'link-b')} ${generateClassName('', 'back-gray')} ${selected == 'sobre' && generateClassName('', 'selected-mainItem')}`}
        onClick={() => {setSelected('sobre')}}
      >Sobre</p>
      <p
        className={
          `${generateClassName('link-button ', 'link-b')} ${generateClassName('', 'back-gray')} ${selected == 'tecnologias' && generateClassName('', 'selected-mainItem')}`
        }
        onClick={() => {setSelected('tecnologias')}}
      >Tecnologias</p>
      <p
        className={`${generateClassName('link-button ', 'link-b')} ${generateClassName('', 'back-gray')} ${selected == 'projetos' && generateClassName('', 'selected-mainItem')}`}
        onClick={() => {setSelected('projetos')}}
      >Projetos</p>
      <p
        className={`${generateClassName('link-button rightLink ', 'link-b')} ${generateClassName('', 'back-gray')} ${selected == 'hobbys' && generateClassName('', 'selected-mainItem')}`}
        onClick={() => {setSelected('hobbys')}}
      >Hobbys</p>
    </div>
  )
}

export default NavBarMain