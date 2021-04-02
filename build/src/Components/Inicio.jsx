import React, { useEffect, Fragment, useContext } from 'react';
import { AppContext } from './ContextGeneral/GeneralContext'
import ContieneEquipo from './ContieneEquipo'
import ContieneCancha from './ContieneCancha'
import ContieneBotonesGame from './ContieneBotonesGame'
import ModalWhilePlaying from './ModalWhilePlaying'
import './estilos/select-team.css'

const Inicio = (props) => {

const { equipoA,
		camisaA,
		equipoB,
		camisaB,
		playing } = useContext(AppContext)

  return (
  	<div className="container">
  	{
  		playing && <ModalWhilePlaying />
  	}
		<ContieneEquipo equipo={equipoA} shirt={camisaA} />
		<ContieneCancha />
		<ContieneEquipo equipo={equipoB} shirt={camisaB} />
		<ContieneBotonesGame />
	</div>
  )
}

export default Inicio;