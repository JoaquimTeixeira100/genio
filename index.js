const elemento = document.querySelector("#resposta123")

const digiteaqui = document.querySelector("#digite")

const respostas = [
    "Certeza!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Melhor te dizer depois.",
    "A meu ver, sim.",
    "Provavelmente.",
    "Perspectiva boa.",
    "Sim.",
    "Negativo",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
   ]

function fazerpergunta () {

    if (digiteaqui.value == "") {
      alert("Digite Sua Pergunta!")
      return
    }
  
    const abc123 = "<div>" + digiteaqui.value + "</div>"
  
    const totalrespostas = respostas.length
    const numeroaleatorio = Math.floor(Math.random() * totalrespostas)
    elemento.innerHTML = abc123 + respostas[numeroaleatorio]
  
  }