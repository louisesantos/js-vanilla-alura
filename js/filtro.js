var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function() {
	// console.log(this.value);
	var pacientes = document.querySelectorAll('.paciente');
	var query = this.value;
	var expressao = new RegExp(query, 'i');

	if (query.length <= 0) {
		pacientes.forEach(function(item) {
			item.classList.remove('invisivel');
		});
		return;
	}

	pacientes.forEach(function(item) {
		var tdNome = item.querySelector('.info-nome');
		var nome = tdNome.textContent;

		// if (nome.indexOf(query) < 0) {
		if (!expressao.test(nome)) {
			item.classList.add('invisivel');
		} else {
			item.classList.remove('invisivel');
		}
	});
});