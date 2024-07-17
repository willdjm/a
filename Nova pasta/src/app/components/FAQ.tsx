"use client"

import { SlArrowDown } from "react-icons/sl";

export function FAQ() {

return (

    <div className=' md:justify-center items-center flex flex-col py-36 w-full gap-16'>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold text-[35px] uppercase">FAQ</p>
            <p className="text-blue-950 text-[35px]">(Perguntas Frequentes)</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold text-xl">Como faço para me inscrever?</p>
            <p className="text-blue-950 text-[17px]">Acesse o formulário de inscrição online e preencha todos os campos
                obrigatórios.</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold text-xl">Há algum custo para participar?</p>
            <p className="text-blue-950 text-[17px]">A inscrição na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA é <span
                    className='underline'>gratuita.</span></p>
        </div>
        <button className="flex flex-col w-full items-center justify-center">
            <a href="#" target="_blank" className="text-blue-950 text-[17px] flex items-center justify-center gap-2">Ver
                mais
                <SlArrowDown /></a>
        </button>
    </div>
);
}