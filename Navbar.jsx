import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue'>
            <h1 className='w-full text-3xl font-bold text-[#3B0A0F] m-4'>Letícia Fonseca Advocacia</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Blog</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contato</li>                
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }                
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r-white-900 bg-[#5C4033] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#3B0A0F] m-4'>Letícia Fonseca Advocacia</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-white-600'>Home</li>
                    <li className='p-4 border-b border-white-600'>Blog</li>
                    <li className='p-4 border-b border-white-600'>About</li>
                    <li className='p-4 border-b'>Contato</li> 
                </ul>
            </div>

        </div>
    )
}

export default Navbar