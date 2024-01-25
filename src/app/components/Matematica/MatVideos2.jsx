import React from 'react'
import ReactPlayer from 'react-player'

function MatVideos2() {
    return (
        <div className='max-w-7xl mx-auto m-4'>
          <div className='mx-auto p-4'>
            <h1 className='font-bold text-3xl py-4 text-center text-slate-700'>Extras</h1>
            <p className='text-slate-700 py-4'>Em todos os capítulos desse segundo ciclo, o estudante vai trabalhar expressões algébricas. O Caderno do estudante traz exemplos contextualizados do uso de representação gráfica de uma equação do 1º grau.</p>
          </div>
          
          <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            
            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/N4I_68zLqG4' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Associação de uma equação linear de 1º grau a uma reta no plano cartesiano</p>
              <p className='text-center text-slate-700 text-sm'>Para representar um sistema de equações lineares de forma gráfica, escolhemos um vídeo que mescla a resolução algébrica com a resolução gráfica com uso da Ferramenta Geogebra.</p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/-7Y408etgOk' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Geogebra</p>
              <p className='text-center text-slate-700 text-sm'>Trazemos aqui uma sugestão de ferramenta que pode servir de apoio para o trabalho do professor. O Geogebra é um aplicativo gratuito que traz muitas ferramentas úteis para o ensino de matemática. Existe a versão online, para download, podendo ser utilizado em smartfone, desktop ou tablet. Abaixo um tutorial das suas principais ferramentas.</p>
            </div>

          </div>

          
        </div>
      )
    }

export default MatVideos2