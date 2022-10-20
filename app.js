const returnGreeting = ({nome, idade, profissao}) => {
  return `Esta é ${nome}, tem ${idade} e é ${profissao}`
};

while (true) {
  const entrada = prompt(
    "Coloque o objeto pessoa ou escreve 'PARE' para parar."
  );

  if (entrada.toUpperCase() == "PARE") {
    alert("O programa vai parar.");
    break;
  }

  alert(returnGreeting(JSON.parse(entrada)))
}
