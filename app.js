const concatena = (firstobj, secondobj) => {
  return { ...firstobj, ...secondobj};
};

const objOne = { a: 1, b: 2 };
const objTwo = { c: 3, d: 4 };
const objsCombined = concatena(objOne, objTwo);
alert(JSON.stringify(objsCombined));

