"use client"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";

export function Depositions() {

return (

    <section className="relative h-screen flex flex-col items-center justify-center w-full">
    {/* Imagem de fundo */}
    


    <div className="absolute inset-0 overflow-hidden">
        <picture>
      <img
        className="object-cover w-full h-full"
        src="/bg-depoimentos.png"  // Substitua pelo caminho da sua imagem
        alt="Imagem de fundo"
      />
      </picture>
    </div>
    

    {/* Conteúdo sobreposto */}
    <div className="relative z-10 text-white text-center w-full flex flex-col items-center justify-center">
      <h1 className="text-white font-bold uppercase text-[2.406rem]">DEPOIMENTOS</h1>

      <Carousel className='w-full max-w-7xl flex pt-16' showStatus={false} showThumbs={false} infiniteLoop
                showArrows={true} showIndicators={false} renderArrowPrev={(onClickHandler, hasPrev)=>
                hasPrev && (
                <button type="button" onClick={onClickHandler}
                    className="absolute md:top-1/2 transform -translate-y-1/2 md:left-0 z-10 bg-transparent border-none cursor-pointer text-amber-400">
                    <FaChevronLeft size={40} />
                </button>
                )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                <button type="button" onClick={onClickHandler}
                    className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-transparent border-none cursor-pointer text-amber-400">
                    <FaChevronRight size={40} />
                </button>
                )
                }
                >
                <div className="flex items-center justify-center w-full gap-20">
                    <div
                        className="flex flex-col items-end justify-center text-white border-l-[6px] border-amber-400 pl-5 max-w-lg">
                        <p className="text-left text-[19.52px]">“Participar de uma olimpíada científica mudou minha
                            vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA
                            NACIONAL DE NANOTECNOLOGIA!”</p>
                        <p className="text-right text-[18.37px] pt-5">João Silva,</p>
                        <p className="text-right text-[18.37px]">Finalista da Olimpíada de Física.</p>
                    </div>
                    <div
                        className="flex flex-col items-end justify-center text-white border-l-[6px] border-amber-400 pl-5 max-w-lg">
                        <p className="text-left text-[19.52px]">“Participar de uma olimpíada científica mudou minha
                            vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA
                            NACIONAL DE NANOTECNOLOGIA!”</p>
                        <p className="text-right text-[18.37px] pt-5">Maria Oliveira,</p>
                        <p className="text-right text-[18.37px]">Vencedora da Olimpíada de Química.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full gap-20">
                    <div
                        className="flex flex-col items-end justify-center text-white border-l-[6px] border-amber-400 pl-5 max-w-lg">
                        <p className="text-left text-[19.52px]">“Participar de uma olimpíada científica mudou minha
                            vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA
                            NACIONAL DE NANOTECNOLOGIA!”</p>
                        <p className="text-right text-[18.37px] pt-5">Ana Santos,</p>
                        <p className="text-right text-[18.37px]">Finalista da Olimpíada de Matemática.</p>
                    </div>
                    <div
                        className="flex flex-col items-end justify-center text-white border-l-[6px] border-amber-400 pl-5 max-w-lg">
                        <p className="text-left text-[19.52px]">“Participar de uma olimpíada científica mudou minha
                            vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA
                            NACIONAL DE NANOTECNOLOGIA!”</p>
                        <p className="text-right text-[18.37px] pt-5">Carlos Silva,</p>
                        <p className="text-right text-[18.37px]">Vencedor da Olimpíada de Biologia.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full gap-10">
                    <div
                        className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                        <p className="text-left text-[19.52px]">“Participar de uma olimpíada científica mudou minha
                            vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA
                            NACIONAL DE NANOTECNOLOGIA!”</p>
                        <p className="text-right text-[18.37px] pt-5">João Silva,</p>
                        <p className="text-right text-[18.37px]">Finalista da Olimpíada de Física.</p>
                    </div>
                    <div
                        className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                        <p className="text-left text-[19.52px]">“Participar de uma olimpíada científica mudou minha
                            vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA
                            NACIONAL DE NANOTECNOLOGIA!”</p>
                        <p className="text-right text-[18.37px] pt-5">Maria Oliveira,</p>
                        <p className="text-right text-[18.37px]">Vencedora da Olimpíada de Química.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full gap-10">
                    <div
                        className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                        <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida.
                            Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA
                            NACIONAL DE NANOTECNOLOGIA!”</p>
                        <p className="text-right text-lg pt-5">Ana Santos,</p>
                        <p className="text-right text-lg">Finalista da Olimpíada de Matemática.</p>
                    </div>
                    <div
                        className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                        <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida.
                            Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA
                            NACIONAL DE NANOTECNOLOGIA!”</p>
                        <p className="text-right text-lg pt-5">Carlos Silva,</p>
                        <p className="text-right text-lg">Vencedor da Olimpíada de Biologia.</p>
                    </div>
                </div>
            </Carousel>

    </div>
  </section>
);
}