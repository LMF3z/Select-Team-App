import React, { useContext } from 'react';
import { AppContext } from './ContextGeneral/GeneralContext'
import Loading from './Loading'
import './estilos/select-team.css'

const ModalWhilePlaying = (props) => {

const { loading } = useContext(AppContext)

  return (
    <div className="modal_while_playing">
    	<div className="contenido_modal">
    	{
			loading && <Loading />
		}
    		<div>
    			Playing...
    		</div>
    	</div>
    </div>
  )
}

export default ModalWhilePlaying;