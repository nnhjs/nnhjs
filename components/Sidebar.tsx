import Image from 'next/image'
import mark from '@/app/favicon.ico'

export default function Sidebar() {
  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <h1>Hung Nguyen</h1>
      <Image
        style={{
          borderRadius: '50%',
          marginBlock: '0.5rem',
        }}
        src={mark}
        alt='Hung Nguyen'
        unoptimized
        height={200}
        width={200}
      />
      <p
        style={{
          paddingBlock: '0.5rem',
        }}>
        {`I'm Mark, a frontend engineer.`}
        <br /> I am try to better than myself yesterday.
      </p>
      <p
        style={{
          paddingBlock: '0.5rem',
        }}>
        Currently, I work on some side projects.
      </p>
      <div className='social'></div>
    </aside>
  )
}
