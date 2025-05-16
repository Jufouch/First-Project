function mostrarGaleria() {
  document.getElementById("gamer").style.display = "flex";
  document.getElementById("mensagem").textContent =
    "Cada personagem representa uma pessoa do grupo. Antes de clicar tente adivinhar quem é quem e colocar no grupo 'Amores da Maria' 💚";
  document.getElementById("fimBtn").style.display = "inline-block";
}

function mostrarFim() {
  document.getElementById("gamer").style.display = "none";
  document.getElementById("fimBtn").style.display = "none";
  document.getElementById("mensagem").style.display = "none";
  document.getElementById("final-img").style.display = "block";
}
