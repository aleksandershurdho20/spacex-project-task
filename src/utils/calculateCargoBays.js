export const calculateCargoBays = (cargobays) => {
  let result = 0;
  if(!cargobays) return result = "No Cargo Bays to calculate"
  const cardoResults = cargobays?.split(",").reduce((accumulator, value) => {
    return accumulator + parseFloat(value);
  }, 0);

  const data = cardoResults / 10;
  const anohter = Number.isInteger(cardoResults) ? 0 : 1;

  result = Math.floor(data) + anohter;

  return result;
};
