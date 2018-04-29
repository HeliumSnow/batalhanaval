
var posicaoAleatoria = Math.ceil(Math.random() * 5); // Define que a posição é escolhida aleatoriamente

var parte1 = posicaoAleatoria;//Define a posição da primeira parte
var parte2 = parte1+1;//Define a posição seguinte ( segunda )
var parte3 = parte2 +1;//Define a posição seguinte ( terceira )

var parteEscolhida = []; //Controla se uma parte do barco já foi atingida

var jogada;// Define a jogada do utilizador
var atingidas = 0;//Define o número de partes atingidas
var totalJogadas = 0;//Define o número de jogadas

var afundado = false;//Verifica se o jogo chegou ao fim

while (afundado === false) { //enquanto todas as partes não forem atingidas o ciclo irá continuar
	
	jogada = prompt("Escolha um número entre 1 e 7:"); //obtém o valor que o utilizador selecionou
	
	if (isNaN(jogada)) { //Uma alteração ao jogo, verifica se a jogada é valida, neste caso, um número.

		alert("Insira um número entre 1 e 7!");
	
	} else if (jogada < 1 || jogada > 7) { //Verifica se o número jogado está entre 1 e 7

		alert("Jogada inválida. Tente de novo!");
	
	} else if (jogada % 1 !== 0) { // Uma alteração ao jogo, verifica que o número é inteiro.
		
		alert("O número tem de ser inteiro!");
		
	} else {
		var comando = 0; 
	
		for (i=0; i < parteEscolhida.length; i++) { //ciclo que se repete por cada valor do array "parteEscolhida"
		    if (jogada == parteEscolhida[i]) { //caso o valor "jogada" seja igual a um valor do array este adiciona uma unidade à variável "comando"
		        comando++;
		    }
		}

		if (comando !== 0) { //caso "comando" não seja zero o utilizador está a repetir uma jogada com o mesmo valor, fazendo isto uma jogada inválida e pede para repetir.
		    
		alert("Já atingiste essa parte. Tenta de novo!");
		
		} else {  //se for zero o utilizador não está a repetir uma jogada ocorre usualmente
		
		    totalJogadas += 1;
		
		    parteEscolhida.push(jogada); //insere a jogada no array "parteEscolhida"
        
		    if (jogada == parte1 || jogada == parte2 || jogada == parte3) { //Determina se  alguma parte foi atinjida.

			    alert("Acertaste em uma parte!");

			    atingidas += 1;
            
			    if (atingidas == 3) { //Se forem as 3 atinjidas, o jogo acaba.

				    afundado = true;

				    alert(" Afundaste o navio por completo! O jogo acabou!");

			    }
        
		    } else { //Se não for nenhum dos valores, o jogador falha.

			    alert("Quase, mas falhaste! Tenta de novo!");

		    }

	    }

    }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas); //Calcula a precisão do jogador.

alert(estatistica);