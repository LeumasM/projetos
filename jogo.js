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

/* Definindo a dimens??o do palco do Jogo

	- Foi utilizado o evento onresize no elemento <body> , 
	para atualizar as informa????es em tempo real do redimensionamento da p??gina.

	- Aplicado a fun????o ajustaTamanhoPalcoJogo()  para retornar o tamanho da p??gina, 
	 e buscar saber quais ser??o os limites dos eixos X e Y.
*/

/* Criando as posi????es rand??micas para o elemento
	
	- Posi????es rand??micas feitas com a biblioteca Math.random();

	- Foi utilizado a biblioteca Math.floor(), para arredondar os valores para baixo,
	  descartando as casas decimais;

	- Foi multiplicado o valor de Math.random() * largura e altura, para poder criar posi????es rand??micas
	dentro da ??rea limite, que foi definido antes por window.innerHeight e window.innerWidth.

	- Criado um elemento html de forma programatica(din??mica) e adicion??-lo dentro do body.

	- Ap??s ter criado o elemento <img>, com document.createElement e acessar seu atributo .src passando o valor
	da imagem, foi gerado um erro de preced??ncia de execu????o devido ao script ser executado antes 
	da cria????o do elemento <body>. Para resolver foi criado uma fun????o e cham??-la no final do body.
	
	- Foi atribuido os valores randomicos das posi????es X e Y para o posicionamento do elemento <img>.

	- Foi aplicado uma corre????o de (-90px) nos eixos das posi????es X e Y, porque como a imagem possui tamanho de 50px,
	 em alguns momentos	o elemento passava a exceder os limites dessas posi????es, 
	 fazendo com que a barra de scroll aparecesse(...que n??o ?? o objetivo).

	- Por fim, foi aplicado um controle, para caso os valores rand??micos coincidam com o valor menor que 0.
		(...pois quando as posi????es rand??micas atingiam o valor menor que 0, o elemento <img> desaparecia da tela)
*/

/* Criando tamanhos rand??micos ao mosquito

	- Foram criadas 3 classes css e elas ser??o aplicadas ao elemento <img> tamb??m de forma rand??mica.
	- A fun????o e o switch s??o os respons??veis por essa l??gica.
	- Atribuida a fun????o tamanhoAleatorio() como valor para classeName do mosquito.

*/

/* Posicionamento em lado A e lado B

	Foi aplicado uma din??mica na imagem para que o jogo se tornasse um pouco mais din??mico:

		- Com base em valor aleat??rio ser?? aplicado uma classe que inverte o lado da imagem.

		- Foi feita a concatena????o das fun????es tamanhoAleatorio() e ladoAleatorio() para as
		estiliza????es randomicas do elemento. Como os valores retornam strings, para n??o ficar
		muito junto, foi concatenado um ' '(espa??o em branco) para separar as strings, fazendo
		com que elas sejam reconhecidas pelo script como as classes CSS
*/

/* Controlando os pontos de vida



*/
