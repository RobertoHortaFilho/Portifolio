import './sobre.css'

interface IProps {
  setSelect: Function
}

const Sobre = ({setSelect}: IProps) => {
  return (
    <div>
      <div className='dev-container'>
        <h5 className='dev-title'>
          DESENVOLVEDOR FULLSTACK
        </h5>
        <p className='dev-desc'>React e Node</p>
      </div>
      <p className='paragrafo'>
        Olá seja muitíssimo bem-vindo! Eu sou o Roberto.
      </p>
      <p className='paragrafo'>
        Minha história com a tecnologia vem de muito tempo atrás quando eu ganhei meu primeiro computador
        em 2004, e eu tinha apenas 5 anos, minha família tinha muito medo de estragar, então eu juntei toda
        a minha curiosidade para desbravar esse novo mundo, e eu tentava de tudo naquele PC!
      </p>
      <p className='paragrafo'>
        Pouco tempo depois ganhei meu primeiro videogame, um playstation 2, e não demorou muito para me
        apaixonar por jogos e como aquilo era feito, mas além de muito novo a internet ainda estava engatinhando
        quando o assunto era programação de jogos independentes, por longos anos eu tentei programar modificações
        para jogos, mas sempre sem muito sucesso.
      </p>
      <p className='paragrafo'>
        Um bom tempo se passou e assim que acabei minha formação no ensino médio fui logo procurar algum
        modo de continuar com meu sonho e acabei encontrando formação 
        da <a href='https://estacio.br' target='_blank'>Estácio</a> em jogos digitais,
        estudei a formaçao, mas ainda não era o que eu queria e depois de um tempo dei uma repaginada,
        fui atras de uma formação para desenvolvimento web e encontrei 
        a <a href='https://www.betrybe.com' target='_blank'>Trybe</a> onde me especializei
        em front e back, alem de um acompanhamento pessoas para me desenvolver como um profissional.
      </p>
      <p className='paragrafo'>
      Atualmente tento sempre contribuir para o conhecimento de todos a minha volta sempre que posso
        quando o assunto é tecnologia/programação eu converso por horas. Minha especialização são criaçoes
        de sites de todos os tipos com back-ends sólidos e front-ends responsivos para ser acessado de qualquer
        lugar, trabalhei com desenvolvimento Mobile com react-native e fiz alguns projetos
        bem bacanas, <a onClick={() => {setSelect('projetos')}}>confere aqui 😉</a>.
      </p>
      <div style={{marginTop: 40}} className='HtmlLine'/>
    </div>
  )
}

export default Sobre
