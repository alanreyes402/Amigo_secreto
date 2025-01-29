let amigos= [];

function agregarAmigo(){
    const inputElement = document.getElementById("amigo");
    const nombre = inputElement.value.trim();

    if(nombre){
        amigos.push(nombre);
        //console.log(amigos);
        
        const lista = document.getElementById("listaAmigos");
        const nuevo_elemento = document.createElement("li");
        nuevo_elemento.textContent = nombre;
        lista.appendChild(nuevo_elemento)

        inputElement.value = " ";

    }else{
        alert("ingresa un nombre");
    }
}

function sortearAmigo(){
    if(amigos.length > 0){
        const indice = Math.floor(Math.random()*amigos.length);
        const amigo_sorteado = amigos[indice];

        const lista_resultado = document.getElementById("resultado");
        lista_resultado.innerHTML = " ";
        const elemento_sorteado = document.createElement("li");
        elemento_sorteado.textContent = "El amigo sorteado es: "+ amigo_sorteado;
        lista_resultado.appendChild(elemento_sorteado);

    }else{
        alert("No a agregado a nadie");
    }
}


