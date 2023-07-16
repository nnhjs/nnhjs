import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='mx-4 selection:bg-sky-500 selection:text-white'>
      <Sidebar />
      <Main />
    </div>
  )
}
