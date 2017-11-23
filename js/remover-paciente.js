// var pacientes = document.querySelectorAll('.paciente');

// pacientes.forEach(function(item) {
// 	item.addEventListener('dblclick', function() {
// 		this.remove();
// 	});
// });

// DELEGAÇÃO DE EVENTO: COLOCAR A ESCUTA NO PAI

var tabela = document.querySelector('#tabela-pacientes'); // tbody

tabela.addEventListener('dblclick', function(event) {
	// remover com efeito gradual (ux: usuario pode clicar 2x pensando que nao removeu por ser rápido demais)
	event.target.parentNode.classList.add('fadeOut');

	//diz pra função segurar oq vc ela quer fazer por "x" tempo (ms)
	setTimeout(function() {
		event.target.parentNode.remove();
	}, 500);
});