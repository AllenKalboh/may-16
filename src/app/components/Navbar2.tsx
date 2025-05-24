import React from 'react'
import { TbAirBalloon } from 'react-icons/tb'
import { navLinks } from '../constant/constant'
import Link from 'next/link'

const Navbar2 = () => {
    return (
        <div className='bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]'>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                        <TbAirBalloon className='w-6 h-6 text-white' />
                    </div>
                    <h1 className='text-xl md:text-2xl text-white uppercase font-bold'> Tripi </h1>
                </div>

                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return <Link href={link.url} key={link.id}> <p className="text-white relative text-base font-medium w-fit blockafter:block after:content-[''] after:bg-yellow-300 afer:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right"> {link.label}</p> </Link>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Navbar2
