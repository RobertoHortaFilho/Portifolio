import { ReactElement } from "react"
import Hobbys from "./Hobbys"
import Projetos from "./Projetos"
import Sobre from "./Sobre"
import Tecnologias from "./Tecnologias"
import './contentController.css'

export type TItems = 'hobbys' | 'sobre' | 'tecnologias' | 'projetos'

interface IProps {
  selectItem: TItems
}

interface IContent {
  hobbys: ReactElement;
  sobre: ReactElement;
  tecnologias: ReactElement;
  projetos: ReactElement;
}

const ContentController = ({selectItem}:IProps) => {
  const content: IContent = {
    hobbys: <Hobbys />,
    sobre: <Sobre />,
    tecnologias: <Tecnologias />,
    projetos: <Projetos />,
  }
  return (
    <div className="container-main-content">
      {content[selectItem]}
    </div>
  )
}

export default ContentController
