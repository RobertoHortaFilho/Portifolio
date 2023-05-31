import './hobbys.css'

const myHobbys = [
  '🎮 Sou apaixonado por todos os tipos de jogos e suas possibilidades, dos cardgames aos de computador.',
  '📖 Gosto de ler livros no tempo livre, técnicos, de psicologia e marketing.',
  '🕹 Progamo jogos para aprender temas que estou estudando.',
  '🎭 Entusiasta de arte, gosto de fazer muita "bagunça" e criar coisas novas.',
  '👒 Nas horas vagas tento colocar em dia os animes.',
  '🎸 Gosto de curti as musicas tocando elas com minhas proprias mãos, entao tenho um ukulele e uma guitarra',
  '🧊 Tenho uma coleçao de cubos magicos e testes logicos',
]

const Hobbys = () => {
  return (
    <div className='hobbys'>
      {myHobbys.map((i, k) => (
        <p key={k}>{i}</p>
      ))}
    </div>
  )
}

export default Hobbys
