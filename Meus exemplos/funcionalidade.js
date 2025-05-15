function lerIdade() {
    var idade = parseInt(document.getElementById("entrada").value);

    votacao(idade);
}

function votacao(idade) {
    const resposta = document.getElementById("resposta");
    resposta.innerHTML = "";
    const mensagem = document.createElement("div");
    mensagem.className = "tile";
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = idade;
    if (idade >= 18) {
        avatar.classList.add("apto");
        mensagem.innerHTML += `<div class="tile">A pessoa pode votar</div>`;
    } else {
        avatar.classList.add("inapto");
        mensagem.innerHTML += `<div class="tile">A pessoa não pode votar</div>`;
    }

    mensagem.prepend(avatar); 
    resposta.appendChild(mensagem);
}