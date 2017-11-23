// Seletores
// var titulo = document.querySelector('h1');
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

// Calcular IMC
var pacientes = document.querySelectorAll('.paciente');

for (i = 0; i < pacientes.length; i++) {

	var tdPeso = pacientes[i].querySelector('.info-peso');
	var peso = tdPeso.textContent;

	var tdAlura = pacientes[i].querySelector('.info-altura');
	var altura = tdAlura.textContent;

	var tdImc = pacientes[i].querySelector('.info-imc');

	// validação
	var pesoValido = true;
	var alturaValida = true;

	if (!validaPeso(peso)) {
		// console.log("Peso inválido");
		pesoValido = false;
		tdImc.textContent = "Peso inválido";
		// pacientes[i].style.backgroundColor = "lightcoral";
		pacientes[i].classList.add('paciente-invalido');
	}

	if (!validaAltura(altura)) {
		// console.log("Altura inválida");
		alturaValida = false;
		tdImc.textContent = "Altura inválida";
		// pacientes[i].style.backgroundColor = "lightcoral";
		pacientes[i].classList.add('paciente-invalido');

	}

	if (alturaValida && pesoValido) {
		tdImc.textContent = calculaImc(peso, altura);
	}
}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}

// Gabi: observe que o calcumaImc está bem isolado. Nao envolve nada de td, ou paciente
// só recebe peso, altura e calcula (para servir dentro de um loop de tabela assim como no ato de adicionar novo paciente)

function validaPeso(peso) {
	return (peso >= 0 && peso < 1000)
}

function validaAltura(altura) {
	return (altura >= 0 && altura <= 3.00);
}