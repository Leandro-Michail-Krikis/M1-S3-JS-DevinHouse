while (true) {
  const entrada = prompt(
    "Adicione todos os numeros separando eles por ',' ou escreve 'PARE' para parar."
  );
  let array = [];
  if (entrada.toUpperCase() == "PARE") {
    alert("O programa vai parar.");
    break;
  }

  try {
    entrada.split(",").forEach((element) => {
      temp = Number(element);
      if (isNaN(temp)) throw dadosInvalidos;
      array.push(temp);
    });
  } catch (error) {
    alert("dados invalidos tente novamente.");
    continue;
  }

  const maior = Math.max(...array);
  const menor = Math.min(...array);
  
  alert("O numero maior e " + maior);
  alert("O numero menor e " + menor);
}
