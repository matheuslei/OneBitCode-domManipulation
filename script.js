function  salvar() {
  let area = document.querySelector("input[name='area']").value
  let numero = document.querySelector("input[name='numero']").value
  let bairro = document.querySelector("input[name='bairro']").value
  let cidade = document.querySelector("input[name='cidade']").value
 
  let novaLista = document.createElement("li")
  novaLista.innerText = area + "m², número " + numero + " (" + bairro + " - " + cidade + ")  "
  
  let botaoRemover = document.createElement("button")
  botaoRemover.type = "button"
  botaoRemover.innerText = "Remover"
  botaoRemover.setAttribute("onclick", "botaoRemover(this)")
  
  novaLista.appendChild(botaoRemover)
  
  document.getElementById("listar-casas").appendChild(novaLista)
}

function botaoRemover(button) {
  let removeLi = button.parentNode
  document.getElementById("listar-casas").removeChild(removeLi)
}
