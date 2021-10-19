var altura = 0
var largura = 0
var vidas = 1
var tempo = 60

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'facil') {
	//2000
	criaMosquitoTempo = 3000
}else if (nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
	//1000
	criaMosquitoTempo = 750
}else if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 300
}


function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){

	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else {
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)


function posicaoRandomica(){

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas > 5){
			
			window.location.href = 'fim_de_jogo.html'

		}else{
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

			vidas++
		}
		
	}	

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = (posicaoX < 0) ? 0 : posicaoX
	posicaoY = (posicaoY < 0) ? 0 : posicaoY

	console.log(posicaoX, posicaoY)


	var mosquito = document.createElement('img')

	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() 
	mosquito.style.position = 'absolute'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.id = 'mosquito'

	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch (classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch (classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}



/*###########################################################################################*/

/* Definindo a dimensão do palco do Jogo

	- Foi utilizado o evento onresize no elemento <body> , 
	para atualizar as informações em tempo real do redimensionamento da página.

	- Aplicado a função ajustaTamanhoPalcoJogo()  para retornar o tamanho da página, 
	 e buscar saber quais serão os limites dos eixos X e Y.
*/

/* Criando as posições randômicas para o elemento
	
	- Posições randômicas feitas com a biblioteca Math.random();

	- Foi utilizado a biblioteca Math.floor(), para arredondar os valores para baixo,
	  descartando as casas decimais;

	- Foi multiplicado o valor de Math.random() * largura e altura, para poder criar posições randômicas
	dentro da área limite, que foi definido antes por window.innerHeight e window.innerWidth.

	- Criado um elemento html de forma programatica(dinâmica) e adicioná-lo dentro do body.

	- Após ter criado o elemento <img>, com document.createElement e acessar seu atributo .src passando o valor
	da imagem, foi gerado um erro de precedência de execução devido ao script ser executado antes 
	da criação do elemento <body>. Para resolver foi criado uma função e chamá-la no final do body.
	
	- Foi atribuido os valores randomicos das posições X e Y para o posicionamento do elemento <img>.

	- Foi aplicado uma correção de (-90px) nos eixos das posições X e Y, porque como a imagem possui tamanho de 50px,
	 em alguns momentos	o elemento passava a exceder os limites dessas posições, 
	 fazendo com que a barra de scroll aparecesse(...que não é o objetivo).

	- Por fim, foi aplicado um controle, para caso os valores randômicos coincidam com o valor menor que 0.
		(...pois quando as posições randômicas atingiam o valor menor que 0, o elemento <img> desaparecia da tela)
*/

/* Criando tamanhos randômicos ao mosquito

	- Foram criadas 3 classes css e elas serão aplicadas ao elemento <img> também de forma randômica.
	- A função e o switch são os responsáveis por essa lógica.
	- Atribuida a função tamanhoAleatorio() como valor para classeName do mosquito.

*/

/* Posicionamento em lado A e lado B

	Foi aplicado uma dinâmica na imagem para que o jogo se tornasse um pouco mais dinâmico:

		- Com base em valor aleatório será aplicado uma classe que inverte o lado da imagem.

		- Foi feita a concatenação das funções tamanhoAleatorio() e ladoAleatorio() para as
		estilizações randomicas do elemento. Como os valores retornam strings, para não ficar
		muito junto, foi concatenado um ' '(espaço em branco) para separar as strings, fazendo
		com que elas sejam reconhecidas pelo script como as classes CSS
*/

/* Controlando os pontos de vida



*/
