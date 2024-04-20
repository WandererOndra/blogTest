import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/navbar-logo.png'

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center space-x-4 gap-2">
        <Image className='flex-none'
          src={Logo}
          alt='Blog logo'
          width={70}
          quality={100}
          placeholder='blur'
        />
        <h1 className='flex-none'>Ondys Blog</h1>
        </div>
        <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
          </div>
    </nav>
    
  )
}
