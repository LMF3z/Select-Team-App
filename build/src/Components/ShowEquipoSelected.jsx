import React, { Fragment } from 'react';

const ShowEquipoSelected = (props) => {

const { data, imagen } = props

  return (
  	<Fragment>
  	{
  		data.map(juga => 
  			<div className="contiene_burbuja">
		    	<img src={imagen} alt="img_jugador" className="burbuja" />
		    	<div className="show_nombre">
		    		{ juga.name }
		    	</div>
		    </div>
		)
  	}
  	</Fragment>
  )
}

export default ShowEquipoSelected;