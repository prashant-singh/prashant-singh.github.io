import React, { useEffect } from 'react'

const Redirect = (props) => {
	const { url } = props
	useEffect(() => {
		window.location.href = url;
	}, [url]);
	return (
		<div style={{ height: '100vh', width: '100vw', background: 'white', position: 'absolute', top: '0', zindex: '10' }}></div>
	)
}

export default Redirect