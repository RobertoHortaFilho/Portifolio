import './navBarMain.css'

interface IProps {
  setSelected: Function;
  selected: string
}

const NavBarMain = ({selected, setSelected} : IProps) => {
  return (
    <div className="container-navBarMain">
      <p
        className={`link-button leftLink ${selected == 'sobre' && 'selected-mainItem'}`}
        onClick={() => {setSelected('sobre')}}
      >Sobre</p>
      <p
        className={`link-button ${selected == 'tecnologias' && 'selected-mainItem'}`}
        onClick={() => {setSelected('tecnologias')}}
      >Tecnologias</p>
      <p
        className={`link-button ${selected == 'projetos' && 'selected-mainItem'}`}
        onClick={() => {setSelected('projetos')}}
      >Projetos</p>
      <p
        className={`link-button rightLink ${selected == 'hobbys' && 'selected-mainItem'}`}
        onClick={() => {setSelected('hobbys')}}
      >Hobbys</p>
    </div>
  )
}

export default NavBarMain