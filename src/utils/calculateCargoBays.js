export const calculateCargoBays = (cargobays) => {
  let result = 0;
  if(!cargobays) return result = "No Cargo Bays to calculate"
  const cardoResults = cargobays?.split(",").reduce((accumulator, value) => {
    return accumulator + parseFloat(value);
  }, 0);

  const calculatedCardoResults = cardoResults / 10;
  const data = Number.isInteger(cardoResults) ? 0 : 1;

  result = Math.floor(calculatedCardoResults) + data;

  return result;
};
