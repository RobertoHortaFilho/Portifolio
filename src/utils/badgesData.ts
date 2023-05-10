export interface IBadgeData {
  title: string;
  description: string;
  src: string;
}

const data: IBadgeData[] = [
  {
    title: 'Curso em vídeo',
    src: '/images/python.png',
    description: 'Um dos meus primeiros contatos com toda a logica de programação, curso de python do Gustavo guanabara.'
  },
  {
    title: 'Estácio',
    src: '/images/estacio.png',
    description: 'Cursei Jogos digitais, consegui aprender muito mais sobre jogos além da programação. (Não finalizado)'
  },
  {
    title: 'Noone Class',
    src: '/images/noone-class.jpg',
    description: 'Curso do Noone focado em logicas e criação de jogos atraves do game maker studi 2.'
  },
  {
    title: 'Trybe',
    src: '/images/trybe.png',
    description: 'Curso intensivo de 1 ano focado em desenvolvimento web e analise de dados, e aperfeiçoamento pessoal.'
  },
  {
    title: 'Zarb Solutions',
    src: '/images/zarb.png',
    description: 'Trabalho de desenvolvimento mobile na empresa Zarb Solutions.'
  },
]


export default data