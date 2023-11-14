// Defina a data alvo (ano, mês - 1, dia, hora, minuto, segundo)
const countDownDate = new Date("2023-11-27T23:59:59").getTime();

// Atualize o contador a cada segundo
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Cálculos para dias, horas, minutos e segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exiba o resultado na div com id="demo"
  document.getElementById("demo").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Calcule e atualize a barra de progresso
  const progress = 100 - ((distance / (1000 * 60 * 60 * 24 * 365)) * 100); // Aproximação do progresso em relação ao ano
  document.getElementById("progress").style.width = progress + "%";

  // Se o contador chegar a zero, exiba uma mensagem
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRADO";
  }
}, 1000); // Atualiza a cada segundo
