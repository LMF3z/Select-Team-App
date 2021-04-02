import React, { useContext } from 'react';
import { AppContext } from './ContextGeneral/GeneralContext'
import './estilos/select-team.css'

const ContieneBotonesGame = (props) => {

const { play, toSecondTime, btnPlay, btnSecondTime } = useContext(AppContext)

  return (
    <div className="contiene_botones_play">
    	<button onClick={play} ref={btnPlay}>Play</button>
    	<button onClick={toSecondTime} ref={btnSecondTime} >Segundo Tiempo</button>
    </div>
  )
}

export default ContieneBotonesGame;