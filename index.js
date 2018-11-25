
function jogar() {
    if (document.querySelector('#pedra').checked == false && document.querySelector('#papel').checked == false && 
    document.querySelector('#tesoura').checked == false) 
    {
        alert('Selecione uma opção');
    }
        else 
        {
            var sorteio = Math.floor(Math.random() * 3);   
            switch(sorteio){
                case 0:
                document.getElementById('pc').src="img/pcpedra.png";
                break;
                case 1:
                document.getElementById('pc').src="img/pcpapel.png";
                break;
                case 2:
                document.getElementById('pc').src="img/pctesoura.png";
                break;
            }
            //Verificar o vencedor ou declarar empate
        if  ((document.getElementById("pedra").checked == true && sorteio == 0) ||
            (document.getElementById("papel").checked == true && sorteio == 1) ||
            (document.getElementById("tesoura").checked == true && sorteio == 2)) {

                document.getElementById("placar").innerHTML="Empate";
            }
            else if ((document.getElementById("pedra").checked == true && sorteio == 2) ||
                (document.getElementById("papel").checked == true && sorteio == 0) ||
                (document.getElementById("tesoura").checked == true && sorteio == 1)){  
                document.getElementById("placar").innerHTML="Jogador Venceu!";              
            }   else{
                    document.getElementById('placar').innerHTML="Computador Venceu!"
            }  
        }
    }

function limpaTudo(){
    document.getElementById('pc').src="img/pc.png"
    document.getElementById('placar').innerHTML="";
}    