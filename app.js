const mensagemOla = (nome) => {
    return `Olá, ${nome}`
}

while (true) {
  const entrada = prompt(
    "Coloque seu nome ou escreve 'PARE' para parar."
  );

  if (entrada.toUpperCase() == "PARE") {
    alert("O programa vai parar.");
    break;
  }

  alert(mensagemOla(entrada))
  


}


