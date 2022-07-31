import React from 'react'
import fundo from '../assets/fundo.jpg'



const Analytics = () => {
    return (
        <div className='w-full bg-[#CDC673] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={fundo} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-white font-bold'>ASSESSORIA JURÍDICA</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>Outra coisa</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus, 
                        reprehenderit laudantium sed vero temporibus modi nemo magnam consectetur, 
                        id iusto debitis ex ducimus cupiditate nisi dignissimos rerum repudiandae ipsa.
                    </p>
                    <button className='bg-[#3B0A0f] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Começar!</button>

                </div>
            </div>
        </div>
    )
}

export default Analytics