import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from './ContextGeneral/GeneralContext'
import './estilos/select-team.css'

const TarjetaEquipo = ({ data, seleccionar, camisa }) => {

const valorSeleccionado = useRef(null)
const defaultDesha = useRef(null)
const valoresDeshabilitados = useRef(null)
const defensaDesha = useRef(null)
const delantDesha = useRef(null)

const { verReferencia, playing, setPlaying } = useContext(AppContext)

useEffect(() => {

  if(data.id == 1){
    valorSeleccionado.current.selected = true
    defaultDesha.current.disabled = true
    valoresDeshabilitados.current.disabled = true
    defensaDesha.current.disabled = true
    delantDesha.current.disabled = true
  }
 
}, [data])

const llenarReferencia = e => {
	e.preventDefault()
	
	const { value } = e.target
	data["posicion"] = value

	verReferencia(data)
}

  return (
    <div className="tarjeta_equipo">
    	<img src={camisa} alt="camiseta" />
    	<div className="Jugador_name">
    		{data.name}
    	</div>
    	<div className="contiene_botones">
    		<select name="selecct_positions" className="list_options"
            onChange={ llenarReferencia }>

    		  <option ref={defaultDesha} value="default" >Seleccionar</option>

              <option disabled ref={valorSeleccionado} 
              value="portero">Portero</option>

              <option ref={defensaDesha} value="defensa">Defensa</option>

              <option ref={delantDesha} value="delantero">Delantero</option>

              <option ref={valoresDeshabilitados} value="banca">Banca</option>
    		</select>
    	</div>
    </div>
  )
}

export default TarjetaEquipo;