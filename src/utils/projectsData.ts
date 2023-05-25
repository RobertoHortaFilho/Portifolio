export interface project {
  src: string;
  title: string;
  desc: string;
  link: string;
  live?: string;
}

const projectData: project[] = [
  {
    src: '/project/ebytr.png',
    title: 'EBYTR Game',
    desc: 'Jogo feito na engine GAMEMAKER, é um pouco da minha jornada estudando programação na Trybe e alguns desafios que encontrei nessa longa caminhada. o jogo pode ser encontrado no meu repositorio do Git e está em progresso!',
    link: 'https://github.com/RobertoHortaFilho/EBYTRGame',
  },
  {
    src: '/project/pong.png',
    title: 'PONG HTML',
    desc: 'Esse projeto foi feito totalmente no browser utilizando apenas o canvas do html para a renderização das imagens, e o javascript para gerenciar o jogo por completo, o jogo está desponivel em live venha testar voce mesmo.',
    live: 'https://robertohortafilho.github.io/pongGame/',
    link: 'https://github.com/RobertoHortaFilho/pongGame',
  },
]


export default projectData