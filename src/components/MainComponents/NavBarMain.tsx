import './navBarMain.css'
import GenerateClassName from '../../utils/GenerateClassName';

interface IProps {
  setSelected: Function;
  selected: string
}

const NavBarMain = ({selected, setSelected} : IProps) => {
  return (
    <div className="container-navBarMain">
      <p
        className={`${GenerateClassName('link-button leftLink ', 'link-b')} ${GenerateClassName('', 'back-gray')} ${selected == 'sobre' && GenerateClassName('', 'selected-mainItem')}`}
        onClick={() => {setSelected('sobre')}}
      >Sobre</p>
      <p
        className={
          `${GenerateClassName('link-button ', 'link-b')} ${GenerateClassName('', 'back-gray')} ${selected == 'tecnologias' && GenerateClassName('', 'selected-mainItem')}`
        }
        onClick={() => {setSelected('tecnologias')}}
      >Tecnologias</p>
      <p
        className={`${GenerateClassName('link-button ', 'link-b')} ${GenerateClassName('', 'back-gray')} ${selected == 'projetos' && GenerateClassName('', 'selected-mainItem')}`}
        onClick={() => {setSelected('projetos')}}
      >Projetos</p>
      <p
        className={`${GenerateClassName('link-button rightLink ', 'link-b')} ${GenerateClassName('', 'back-gray')} ${selected == 'hobbys' && GenerateClassName('', 'selected-mainItem')}`}
        onClick={() => {setSelected('hobbys')}}
      >Hobbys</p>
    </div>
  )
}

export default NavBarMain