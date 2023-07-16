import Image from 'next/image'
import mark from '@/app/favicon.ico'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

export default function Sidebar() {
  return (
    <aside className='my-4 flex flex-col items-center rounded-lg bg-gradient-to-r from-cyan-100 to-blue-300 py-8 text-center'>
      <h1 className='text-3xl'>Hung Nguyen</h1>
      <Image
        className='my-8 rounded-full'
        src={mark}
        alt='Hung Nguyen'
        unoptimized
        height={100}
        width={100}
      />
      <p className='py-4'>
        {`I'm Mark, a frontend engineer.`}
        <br /> Currently, I work on some side projects.
      </p>
      <i className='py-4'>Stay hungry, stay foolish.</i>
      <div className='grid grid-cols-3 gap-3'>
        <a
          href='https://github.com/nnhjs'
          target='reg'
          className='scale-125 rounded-lg p-1 transition-colors hover:bg-sky-200'>
          <GitHubLogoIcon />
        </a>
        <a
          href='https://twitter.com/nnhungjs'
          target='reg'
          className='scale-125 rounded-lg p-1 transition-colors hover:bg-sky-200'>
          <TwitterLogoIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/nnhungjs/'
          target='reg'
          className='scale-125 rounded-lg p-1 transition-colors hover:bg-sky-200'>
          <LinkedInLogoIcon />
        </a>
      </div>
    </aside>
  )
}
