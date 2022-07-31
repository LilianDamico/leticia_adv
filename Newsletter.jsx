import React from 'react'


const Newsletter = () => {
    return (
        <div className='w-full py-16 text-[#3B0A0F] px-4 bg-[#2F4F4F]'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='col-span-2 my-4'>
                <h1 className='md:text5xl sm:text-4xl text-xl font-bold py-2'>Assine nossa Newsletter e fique por dentro das novidades!</h1>
                <p>Cadastre-se!</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="e-mail" placeholder='e-mail' />
                    <button className='bg-[#3B0A0f] w-[200px] rounded-md font-medium mx-auto my-6 px-6 md:mx-0 py-3 text-white'>Enviar</button>
                </div>
            </div>
            <p>Usamos Cookies! Leia nossa <span className=''>Política de Privacidade.</span></p>
            </div>            
        </div>
    )
}

export default Newsletter