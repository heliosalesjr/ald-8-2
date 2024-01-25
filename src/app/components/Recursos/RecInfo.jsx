import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'

function RecInfo() {
    return (
        <>
            <section className="max-w-7xl mx-auto ">
                <div className='flex justify-center items-center'>
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className=" text-gray-700 dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-700 dark:text-white">
                        Estratégia Didática: Infográfico
                        </h2>
                        <p className="mb-4">
                        Infográfico é um tipo de linguagem que associa elementos verbais (frases curtas) a elementos não verbais (imagens, sons, gráficos etc.). O infográfico tem como principal função informar o leitor de maneira simples, rápida e objetiva. É uma forma de comunicação bastante atrativa, atual e utilizada pelas mídias digitais de jornais, redes sociais etc.
                        </p>
                        <p>
                        Na elaboração de um infográfico, é importante atentar à consonância entre os elementos verbais e não verbais, ou seja, texto, imagens e demais elementos devem se referir sempre ao mesmo assunto. Veja um exemplo:
                        </p>
                    </div>
                    <div className="lg:col-span-1 lg:justify-self-center lg:items-center mt-8">
                        <img className="w-full rounded-lg" src="images/infografico.jpg" alt="office content 1" />
                    </div>
                </div>
    
                </div>
            
                
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
                <Accordion variant='bordered'>
                    <AccordionItem key="1" aria-label="Accordion 1" title="Sugestão de atividades">
                    
                        <p className='py-4'>Em dupla com um colega, crie um infográfico explicando o que é uma conta-poupança: sua origem, como funciona e as vantagens desse tipo de investimento. Caso julgue necessário, revisite os capítulos 3, 4 e 5 do Livro do Estudante. Você também pode buscar informações na internet. Após a construção do infográfico, apresente-o para a turma. O objetivo desta atividade é estimular os estudantes em sua capacidade de criar, de articular elementos verbais e não verbais, de trabalhar em grupo e de argumentar.</p>
                        <p className='py-4'>Peça aos estudantes que, além da definição, insiram no infográfico exemplos de rendimento mensal de uma conta-poupança. Chame a atenção para o fato de que eles devem sistematizar informações da conta-poupança, tais como a origem, o funcionamento e as vantagens.</p>
                        <p className='py-4'>No momento da construção do infográfico, certifique-se de que texto e imagem conversam, pois um deve complementar o outro – não deve haver uma relação hierárquica ou domínio de uma linguagem sobre a outra.</p>
                        <p className='py-4'>No momento de socialização da atividade, pergunte aos estudantes como eles construíram o infográfico.</p>
                        <p className='py-4'>Atenção: Antes que os estudantes iniciem a atividade, certifique- se de que eles entenderam a estrutura de um infográfico. Chame a atenção para o fato de que eles devem sistematizar as dicas com frases curtas, imagens etc.</p>
                        <p className='py-4'>Os infográficos podem ser feitos à mão ou criados em sites específicos. </p>

                    </AccordionItem>
                    
                </Accordion>
                
                    
                    </div>
            </section>
            <div className="max-w-screen-lg mx-auto  pb-8 sm:pb-8 lg:pb-12">
                
                <div className="relative flex flex-wrap bg-primary rounded-lg px-4 py-6 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
                    <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
                    <p className='font-bold'>
                    Você pode conferir mais exemplos aqui:{' '}
                        <a
                            href="https://porque.com.br/categoria/infograficos/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline hover:text-blue-100"
                        >
                            Infográficos | Por Quê?
                        </a>
                    </p>
                    </div>
    
                   
                
                    
                </div>
                
                </div>
        </>
      )
    }

export default RecInfo