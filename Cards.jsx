import React from 'react'
import bussola from '../assets/bussola.jpg'
import estrategia from '../assets/estrategia.jpg'
import arbitro from '../assets/arbitro.jpg'


const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-[#E6E8FA]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl bg-[#7093DB] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-22 mx-auto  mt-[3rem] bg-white' src={bussola} alt="/" />
                    <h2 className='text2xl font-bold text-center py-2'>Assessoria Empresarial</h2>
                    <p className='text-center text-4xl font-bold'>Saiba Mais</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Tributos</p>
                        <p className='py-2 border-b mx-8'>Reforma Trabalhista</p>
                        <p className='py-2 border-b mx-8'>Consumidor e LGPD</p>
                    </div>
                    <button className='bg-[#3B0A0F] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Selecione</button>
                </div> 
                <div className='w-full shadow-xl bg-[#7093DB] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-30 mx-auto  mt-[3rem] bg-transparent' src={estrategia} alt="/" />
                    <h2 className='text2xl font-bold text-center py-2'>Planejamento Estratégico</h2>
                    <p className='text-center text-4xl font-bold'>Profilaxia Jurídica</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Resolvendo o problema antes que o conflito se instale</p>
                        
                    </div>
                    <button className='bg-[#3B0A0F] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Selecione</button>
                </div>
                <div className='w-full shadow-xl bg-[#7093DB] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-30 mx-auto  mt-[3rem] bg-white' src={arbitro} alt="/" />
                    <h2 className='text2xl font-bold text-center py-2'>Arbitragem</h2>
                    <p className='text-center text-4xl font-bold'>Solucionando conflitos de forma prática</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Mediação</p>
                        <p className='py-2 border-b mx-8'>Pré-Contrato</p>
                        <p className='py-2 border-b mx-8'>Adequando a vontade das partes às normas jurídicas com tranquilidade e segurança</p>
                    </div>
                    <button className='bg-[#3B0A0F] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Selecione</button>
                </div>
                               
               
            </div>
            
        </div>
    )
}

export default Cards