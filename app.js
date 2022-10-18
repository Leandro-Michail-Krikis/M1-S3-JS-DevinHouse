const concatena = (firstArray, secondArray) => {
  return [ ...firstArray, ...secondArray];
};

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const arraysCombined = concatena(arrayOne, arrayTwo);
alert(arraysCombined);

