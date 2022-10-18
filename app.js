const verificaPalindromo = (palavra) => {
  const temp = palavra.split("").reverse().join("");
  return palavra == temp;
};

while (true) {
  const entrada = prompt(
    "Coloque uma palavra para ser verificada se e um palíndromo ou escreve 'PARE' para parar."
  );

  if (entrada.toUpperCase() == "PARE") {
    alert("O programa vai parar.");
    break;
  }

  alert(`A palavra "${entrada}" ${verificaPalindromo(entrada) ? '' : 'não'} e um palíndromo`)
}
