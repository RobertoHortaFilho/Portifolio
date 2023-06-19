import './page.css'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Aside from '@/components/Aside'
import GlobalContext from './GlobalContext'
import './colors.css'

export default function Home() {
  return (
    <main className={'main'}>
      <GlobalContext>
        <Header />
        <div className={'separete'}/>
        <div className={'corpo'}>
          <Aside />
          <Main />
        </div>
      </GlobalContext>
    </main>
  )
}
