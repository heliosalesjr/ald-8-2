'use client'

import AtiUnindoFerramentas from '../components/Recursos/AtiUnindoFerramentas'
import RecFerramentas from '../components/Recursos/RecFerramentas'
import RecHero from '../components/Recursos/RecHero'
import RecInfo from '../components/Recursos/RecInfo'
import RecPadlet from '../components/Recursos/RecPadlet'
import RecPadletVideo from '../components/Recursos/RecPadletVideo'


function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecPadlet />
        <RecPadletVideo />
        <AtiUnindoFerramentas />
        <RecInfo />
        <RecFerramentas />
    </>
    
  )
}

export default Recursos