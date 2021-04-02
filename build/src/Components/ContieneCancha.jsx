import React, { useContext, useRef } from 'react';
import ShowEquipoSelected from './ShowEquipoSelected'
import { AppContext } from './ContextGeneral/GeneralContext'
import './estilos/select-team.css'

const ContieneCancha = (props) => {

	const { cancha, equipoSeleccionadoA, equipoSeleccionadoB, camisaA, camisaB } = useContext(AppContext)

  return (
    <div className="contiene_cancha" >
    	<div className="contiene_equipo_A" ref={cancha}>
    		<ShowEquipoSelected data={equipoSeleccionadoA} imagen={camisaA}/>
    	</div>
    	<img src="./Imagenes/horizontal_field.jpg" alt="cancha_football" />
    	<div className="contiene_equipo_B">
    		<ShowEquipoSelected data={equipoSeleccionadoB} imagen={camisaB}/>
    	</div>
    </div>
  )
}

export default ContieneCancha;