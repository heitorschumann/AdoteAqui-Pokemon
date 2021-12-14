var divCards = document.querySelector(".cardsCont");

function requisitaApi(numeroid){
        var requisicao = new XMLHttpRequest();

        requisicao.open("GET", `https://pokeapi.co/api/v2/pokemon/${numeroid}/`);

        requisicao.onload = function(){
            if(requisicao.status == 200){
                var pkmnObj = JSON.parse(requisicao.response);
                console.log(pkmnObj);
                criaDiv(pkmnObj);
            }else{
                console.log("erro");
            }
        
        }

        requisicao.send();
}

function criaDiv(objeto){
    let div =  document.createElement('div');
    let name = objeto.name;
   div.classList.add("card");
   div.innerHTML = `<img src="${objeto.sprites.front_default}"></img>
                    <div class="container">
                        <h3>${name.toUpperCase()}</h3>
                        <button>Eu escolho você!</button>
                    </div>`
    divCards.appendChild(div);

}

function fazVariasRequisicoes(numeroRequisicoes){
    for(var i = 1; i <= numeroRequisicoes;i++){
        requisitaApi(i);
    }
}

fazVariasRequisicoes(500);