window.onload = function() {

	const lugarCartel = document.createElement('div')
	lugarCartel.classList.add('lugarCartel')
	const donde = document.querySelector('.container')
	donde.append(lugarCartel)

	const cartelRojo = document.createElement('p')
	cartelRojo.innerHTML = 'Usted es menor de edad'
	cartelRojo.style = "background: red"
	cartelRojo.classList.add('cartelRojo')

	const cartelVerde = document.createElement('p')
	cartelVerde.innerHTML = '¡Bienvenido!'
	cartelVerde.style = "background: green"
	cartelVerde.classList.add('cartelVerde')

	const boton = document.querySelector('.boton')
	let loQueIngresoUsuario = document.querySelector('.number').value

	function responder(event) {
		if (loQueIngresoUsuario <= 17) {
			lugarCartel.append(cartelRojo)
		} else {
			lugarCartel.append(cartelVerde)
		}
	}
	boton.addEventListener('click', responder)
}

/*Si la edad agregada es menor a 18, mostrar un cartel rojo que diga que es menor de edad. En el
caso contrario, mostrar un cartel verde que le de la bienvenida.


Al apretar enter dentro del campo para ingresar la edad, el usuario debe poder ver el
cartel mencionado en el primer ejercicio.*/


