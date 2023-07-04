import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='mx-4 grid grid-cols-1 gap-16 pt-8 md:mx-32 md:grid-cols-main'>
      <Sidebar />
      <Main />
    </div>
  )
}
