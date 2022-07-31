import React from 'react'
import Typed from 'react-typed';



const Hero = () => {
    return (
        <div className='text-[#3B0A0F] bg-[#E9C2A6]'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx auto text-center flex flex-col justify-center'>
                <p className='md:2xl text-xl font-bold text-[#3B0A0F]'>Modernidade e Atitude!</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>Assessoria jurídica</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[#3B0A0F'>Máximo em soluções!</p>
                    <Typed
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#3B0A0F'
                     strings={['Arbitragem', 'Assessoria', 'Planejamento']} 
                     typeSpeed={100} backSpeed={160} 
                     loop
                      />
                </div>
                <p className='md:2xl text-xl font-bold text-[#8B0000]'>Conheça soluções em Arbitragem, Assessoria Empresarial e Planejamento.</p>
                <button className='bg-[#3B0A0F] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Click para conhecer!</button>
            </div>


        </div>
    )
}

export default Hero