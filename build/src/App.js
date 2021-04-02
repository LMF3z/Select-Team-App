import React, { Fragment, useState } from 'react';
import AppContext from './Components/ContextGeneral/GeneralContext'
import Inicio from './Components/Inicio'

const App = () => {
	return(
		<AppContext>
			<Inicio />
		</AppContext>
	)
}

export default App
