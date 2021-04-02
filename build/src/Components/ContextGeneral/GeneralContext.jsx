import React, {createContext, useEffect, useState, useRef} from 'react';
import { gsap } from 'gsap'

export const AppContext = createContext()

const GeneralContext = ({ children }) => {


	// Estados iniciales
	const [equipoA, setEquipoA] = useState([])
	const [camisaA, setCamisaA] = useState()

	const [equipoB, setEquipoB] = useState([])
	const [camisaB, setCamisaB] = useState()

	const [contarCambios, setContarCambios] = useState(false)

	const [cambiosA, setCambiosA] = useState(2)
	const [cambiosB, setCambiosB] = useState(2)

	const [loading, setLoading] = useState(false)

	// Estados modificados
	const [equipoSeleccionadoA, setEquipoSeleccionadoA] = useState([])
	const [equipoSeleccionadoB, setEquipoSeleccionadoB] = useState([])

	// pasar al segundo tiempo
	// const [play, setPlay] = useState(undefined)
	const [playing, setPlaying] = useState(false)

	const referenciaEquipo = useRef(null)
	const cancha = useRef(null)
	const btnPlay = useRef(null)
	const btnSecondTime = useRef(null)

useEffect(() => {
	const BuscarEquipos = async () => {
		let url = "http://localhost/API_REST/API_select-team/source_team.php"
		const res = await fetch(url)
		const resp = await res.json()

		const posicionesIniciales = {
			"posiciones" : ['Seleccionar','Portero', 'Defensa', 'Delantero', 'Banca']
		}

		resp.equipo_A['posicionesIniciales'] = posicionesIniciales
		await setEquipoA(resp.equipo_A)
		await setCamisaA(resp.camisetas.camiseta_A)
		await setEquipoSeleccionadoA([...equipoSeleccionadoA, resp.equipo_A[0]])

		resp.equipo_B['posicionesIniciales'] = posicionesIniciales
		await setEquipoB(resp.equipo_B)
		await setCamisaB(resp.camisetas.camiseta_B)
		await setEquipoSeleccionadoB([...equipoSeleccionadoB, resp.equipo_B[0]])
	}
	BuscarEquipos()

	btnSecondTime.current.disabled = true
}, [])

const verReferencia = (jugador) => {

switch (jugador.equipo) {
	case "A":

		// no permitir entrar mas
		if(cambiosA == 0){
			alert('Ya has tomado tus cambios disponibles')
			break;
		} else {
			if(jugador.posicion.toLowerCase() == 'banca' || jugador.posicion.toLowerCase() == 'default'){

				let buscarEnBanca = equipoSeleccionadoA.filter(j => j.id == jugador.id ? jugador : '')

				if(buscarEnBanca.length > 0){
					setEquipoSeleccionadoA(equipoSeleccionadoA.filter(jugaS => jugaS.id != jugador.id))
				}

			} else {

				if(equipoSeleccionadoA.length <= 10){

					let buscarJugador = equipoSeleccionadoA.filter(j => j.id == jugador.id ? jugador : '')
					
					// modifica
					if(buscarJugador.length > 0){

						setEquipoSeleccionadoA(equipoSeleccionadoA.map(jug => jug.id == jugador.id ? jug = jugador : jug))
						
					} else {
						
						// agrega
						setEquipoSeleccionadoA([...equipoSeleccionadoA,jugador])

						if(contarCambios){
							setCambiosA(cambiosA -1)

							if(cambiosA == 0){
								alert('Ya has tomado tus cambios disponibles')
								break;
							}
						}
					}

				} else {
					alert('Tu equipo ya esta completo')
					break
				}
			}
		}

		break

	case "B":

		if(cambiosB == 0){
			alert('Ya has tomado tus cambios disponibles')
			break;
		} else {
			if(jugador.posicion.toLowerCase() == 'banca' || jugador.posicion.toLowerCase() == 'default'){

				let buscarEnBanca = equipoSeleccionadoB.filter(j => j.id == jugador.id ? jugador : '')

				if(buscarEnBanca.length > 0){
					setEquipoSeleccionadoB(equipoSeleccionadoB.filter(jugaS => jugaS.id != jugador.id))
				}

			} else {
				if(equipoSeleccionadoB.length <= 10){

					// modifica
					let buscarJugador = equipoSeleccionadoB.filter(j => j.id == jugador.id ? jugador : '')
					
					if(buscarJugador.length > 0){

						setEquipoSeleccionadoB(equipoSeleccionadoB.map(jug => jug.id == jugador.id ? jug = jugador : jug))

					} else {

						// agrega
						setEquipoSeleccionadoB([...equipoSeleccionadoB,jugador])

						if(contarCambios){
							setCambiosB(cambiosB -1)

							if(cambiosB == 0){
								alert('Ya has tomado tus cambios disponibles')
								break;
							}
						}
					}

				} else {
					alert('Tu equipo ya esta completo')
					break
				}
			}

		}


		break
	default:
		return jugador
}

} // funcion verReferencia

const play = () => {
	if(equipoSeleccionadoA.length < 11 ||  equipoSeleccionadoB.length < 11){
		alert('Antes de jugar debes completar tu equipo')
		return null
	} else if(window.confirm('Recuerda que solo puedes hacer cambios en el segundo tiempo. Si estas preparado... ¡Empecemos!')){
		
		setPlaying(true)
		setLoading(true)
		btnPlay.current.disabled = true
		btnSecondTime.current.disabled = false
	}
}

const toSecondTime = () => {
	setPlaying(false)
	btnPlay.current.disabled = false
	btnSecondTime.current.disabled = true

	setContarCambios(true)
}

  return (
    <AppContext.Provider value={{
    	equipoA,
		camisaA,
		equipoB,
		camisaB,

		referenciaEquipo,
		verReferencia,

		cancha,

		equipoSeleccionadoA,
		equipoSeleccionadoB,

		play,
		toSecondTime,

		btnPlay,
		btnSecondTime,

		playing,
		setPlaying,

		loading
    }}>
    	{ children }
    </AppContext.Provider>
  )
}

export default GeneralContext;