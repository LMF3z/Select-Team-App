import React, { Fragment, useContext, useRef } from 'react';
import { AppContext } from './ContextGeneral/GeneralContext'
import TarjetaEquipo from './TarjetaEquipo'

const ContieneEquipo = (props) => {

const { referenciaEquipo } = useContext(AppContext)

const { equipo, shirt } = props

  return (
    <Fragment>
        <div className="nombre_equipo">
            <h1>Arma tu equipo</h1>
        </div>
        <div className="contiene_equipo" >
        {
        	equipo.map(team => 
        		<TarjetaEquipo key={team.id} 
        		data={team}
        		camisa={shirt}
        		seleccionar={equipo.posicionesIniciales.posiciones} />
        	)
        }
    	</div>        
    </Fragment>
  )
}

export default ContieneEquipo;