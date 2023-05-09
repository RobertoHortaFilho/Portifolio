import styles from './page.module.css'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Aside from '@/components/Aside'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.separete}/>
      <div className={styles.corpo}>
        <Aside />
        <Main />
      </div>
    </main>
  )
}
