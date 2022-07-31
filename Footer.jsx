import React from 'react'
import {
    FaFacebookSquare,
    FaInstagramSquare
    
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[100%] bg-[#2F4F4F] mx-auto py-16 px-4 grid lg:grid-cols-4 gap-2 text-[#3B0A0F]'>
            <div>
                <h1 className='max-w-[40%] text-3xl font-bold text-[#3B0A0F] m-3'>Letícia Fonseca Advocacia</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima error ratione odio aliquam at 
                    tenetur consequuntur quo dolores iusto repellat enim odit, explicabo quam sed aspernatur amet 
                    deleniti eaque! Sapiente!</p>
                <div className='flex justfy-content space-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                </div>
            </div>

            <div className='lg:col-auto max-w-fit flex flex-col  justify-center'>
            <h6 className='font-medium text-white max-h-8 py-2 px-2'>Assessoria Empresarial</h6>
            <ul className='text-white py-6 justify-center border-b'>
                <li className='py-3 text-sm'>Tributos</li>
                <li className='py-3 text-sm'>Reforma trabalhista</li>
                <li className='py-3 text-sm'>Direito do consumidor</li>
                <li className='py-3 text-sm'>LGPD</li>
            </ul>                
            </div>
            <div className='lg:col-auto max-w-fit flex flex-col  justify-center'>
            <h6 className='font-medium text-white max-h-8 py-2 px-2'>Planejamento Estratégico</h6>
            <ul className='text-white py-6 justify-center border-b'>
                <li className='py-3 text-sm'>Direito Penal-Tributário</li>
                <li className='py-3 text-sm'>Exportação/Importação</li>
                <li className='py-3 text-sm'>Marketing</li>
                <li className='py-3 text-sm'>Assessoria de Imprensa</li>
            </ul>                
            </div>
            <div className='lg:col-auto max-w-fit flex flex-col  justify-center'>
            <h6 className='font-medium text-white max-h-8 py-2 px-2'>Soluções em Arbitragem</h6>
            <ul className='text-white py-6 justify-center border-b'>
                <li className='py-3 text-sm'>Solução de Conflitos</li>
                <li className='py-3 text-sm'>Adequação de Cláusulas Contratuais</li>
                <li className='py-3 text-sm'>Mediação</li>
                <li className='py-3 text-sm'>Pré-Contrato</li>
            </ul>                
            </div> 

           

        </div>
    )
}

export default Footer