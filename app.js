const sumAll = (...args) => {
  soma = 0;
  args.forEach((element) => (soma += element));
  return soma;
};

console.log(sumAll(1, 2, 3, 4, 5));
alert(sumAll(1, 2, 3, 4, 5));
