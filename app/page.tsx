import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

export default function Home() {
  return (
    <div className='selection:bg-sky-500 selection:text-white'>
      <main className='flex flex-col items-center pt-16'>
        <h1 className='bg-gradient-to-r from-blue-500 via-pink-600 to-yellow-500 bg-clip-text text-3xl font-extrabold text-transparent'>
          Hung Nguyen
        </h1>
        <p className='pt-4'>
          👋 <span className='text-yellow-500'>Nice to meet you. </span>
          <span className='text-sky-500'>Wish you all the best</span> 💙
        </p>
        <i className='py-4'>Stay hungry, stay foolish.</i>
        <nav className='grid grid-cols-3 gap-3'>
          <a
            href='https://github.com/nnhjs'
            target='reg'
            className='scale-125 rounded-lg p-1 transition-all hover:scale-150 hover:bg-gray-200'>
            <GitHubLogoIcon />
          </a>
          <a
            href='https://twitter.com/nnhungjs'
            target='reg'
            className='scale-125 rounded-lg p-1 transition-all hover:scale-150 hover:bg-gray-200'>
            <TwitterLogoIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/nnhungjs/'
            target='reg'
            className='scale-125 rounded-lg p-1 transition-all hover:scale-150 hover:bg-gray-200'>
            <LinkedInLogoIcon />
          </a>
        </nav>
      </main>
    </div>
  )
}
