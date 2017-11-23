var buttonBuscar = document.querySelector('#buscar-pacientes');

// AJAX: Requisição assícrona

buttonBuscar.addEventListener('click', function() {
	// console.log('Buscando pacientes...');

	// XMLHttpRequest: objeto responsável por fazer requisições http (api)

	var xhr = new XMLHttpRequest();

	// CONFIGURAR REQUISIÇÃO

	// abre conexão com tipo get, post, delete
	// equivalente de buscar no navegador o endereço
	xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

	// escutador de evento no xhr (escutar resposta da requisição)
	xhr.addEventListener('load', function() {
		var erroAjax = document.querySelector('#erro-ajax');

		// verificar status
		if (xhr.status === 200) {
			erroAjax.classList.add('invisivel');

			// responseText: resposta do xhr
			var resposta = xhr.responseText;
			// tipo da resposta
			// console.log(typeof resposta);

			// parsear resposta string para json
			var pacientes = JSON.parse(resposta);
			// console.log(typeof pacientes);

			// iterar tabela com novos pacientes
			pacientes.forEach(function(item) {
				adicionaPacienteTabela(item);
			});
		} else {
			console.log(xhr.status, xhr.responseText);
			erroAjax.classList.remove('invisivel');
		}
	});

	// envia a nossa requisição
	// equivalente a carregar a url no navegador
	// antes disso, devemos pegar a resposta senão nao vemos nada acontecer
	xhr.send();
});