import React from 'react'
import ReactPlayer from 'react-player'

function MatVideos() {
    return (
        <div className='max-w-7xl mx-auto m-4'>
          <div className='mx-auto p-4'>
            <h1 className='font-bold text-3xl py-4 text-center text-slate-700'>Expressões algébricas, equações lineares e plano cartesiano</h1>
            <p className='text-slate-700 py-4'>Em todos os capítulos desse segundo ciclo, o estudante vai trabalhar expressões algébricas. O Caderno do estudante traz exemplos contextualizados do uso de representação gráfica de uma equação do 1º grau.</p>
          </div>
          
          <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            
            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/YHb-xGxV2Lw' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Valor numérico de expressões algébricas</p>
              <p className='text-center text-slate-700 text-sm'>A Professora Gis traz um exemplo de como se calcula o valor numérico de uma expressão algébrica.</p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/zoAI2f-JouA?list=TLGG_Yv9GeG24m8yNTAxMjAyNA' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Equações lineares</p>
              <p className='text-center text-slate-700 text-sm'>A Khan Academy traz um vídeo mostrando um exemplo mais teórico desse mesmo assunto.</p>
            </div>

          </div>

          <div className="max-w-screen-xl mx-auto pb-4 p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            
            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/B_O0bVKYm1I' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Sistema de equação polinomiais de 1º grau; resolução algébrica e representação no plano cartesiano</p>
              <p className='text-center text-slate-700 text-sm'>Trazemos ainda o vídeo da professora Thais mostra como representar graficamente uma equação e como resolver sistemas lineares de forma gráfica.</p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/mE6_YVkTDr0' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Sequências recursivas e não recursivas</p>
              <p className='text-center text-slate-700 text-sm'>Quando resolvemos expressões algébricas no contexto monetário, muitas vezes chegamos a sequências numéricas recursivas. Caso surja a dúvida com seus estudantes, sugerimos a explicação breve de sequencias recursivas e não recursivas que a professora Gis traz. </p>
            </div>
            
          </div>
        </div>
      )
    }

export default MatVideos