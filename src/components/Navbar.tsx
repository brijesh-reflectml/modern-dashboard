import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="px-8 py-4 flex items-center justify-between">
      <div className="text-4xl font-bold text-yellow-500 text-transparent bg-clip-text">RANDOM COMPANY</div>
      
      <div className="flex items-center">
        <nav className="hidden md:flex items-center gap-8">
          {['HOME', 'SERVICES', 'SAAS', 'ABOUT', 'CAREERS'].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-white hover:text-gray-200 transition-colors uppercase text-md"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <button className="ml-24 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors">
          CONTACT NOW
        </button>
      </div>
    </header>
  )
} 