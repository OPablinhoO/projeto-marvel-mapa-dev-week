/*

ATENÇÃO!!! NÃO É UMA BOA PRÁTICA FICAR COMENTANDO EM CÓDIGOS DE TRABALHO.
OBJETIVO - 1 Quando passar o mouse em cima do personagem temos que:

 - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar animação nele
 - retirar clase selecionado do personagem que está selecionado

OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e o nome do personagem grande.

  - alterar imagem do jogador 1
  - alterar o nome do jogador 1

*/

/*OBJETIVO 1*/ const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const idSelecionado = personagem.attributes.id.value;

    if (idSelecionado === "ultron") return;

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    /*OBEJTIVO 2*/

    const imagemJogador1 = document.getElementById("personagem-jogador-1");
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById("nome-jogador-1");
    const nomeSelecionado = personagem.getAttribute("data-name");

    nomeJogador1.innerHTML = nomeSelecionado;
  });
});
