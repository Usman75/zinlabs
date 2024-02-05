import Link from 'next/link';
import Image from 'next/image';
import LogoIcon from "../../images/logo-icon.svg"
const Logo = () => {
    return (
        <div className='py-6 px-0 flex items-center justify-between container mx-auto'>
            <strong className='w-1/4'>
                <Link href="/" className="flex items-center">
                    <div className='bg-indigo-700 p-2 rounded-3xl mr-2'>
                        <Image
                            className="relative"
                            src={LogoIcon}
                            alt="Logo"
                            width={30}
                            height={30}
                            priority
                        />
                    </div>
                    <h1 className='font-bold text-2xl md:text-3xl m-0'>ZinTools</h1>
                </Link>
            </strong>
            <form className='w-1/2'>
                <div class="relative">
                    <button class="absolute inset-y-0 end-0 flex items-center bg-transparent hover:bg-gray-100 border border-transparent hover:border-gray-300 p-3 bg-gray-50 rounded-r-3xl">
                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search icon</span>
                    </button>
                    <input type="text" id="search-navbar" class="block w-full px-3 py-2.5 pr-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Search for Movies, TV Shows, Themes & Cast" />
                </div>
            </form>
            <div className='w-1/4 text-end'>
                <button className='text-gray-900 bg-transparent hover:text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-base rounded-3xl text-sm px-5 py-2.5 focus:outline-none m-1'>Login</button>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-base rounded-3xl text-sm px-5 py-2.5 focus:outline-none m-1'>Sign up</button>
            </div>
        </div>
    )
}

export default Logo