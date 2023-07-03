import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import style from './page.module.css'

export default function Home() {
  return (
    <div className={style.wrapper} > 
      <Sidebar />
      <Main />
    </div>
  )
}
