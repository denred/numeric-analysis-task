export const getMinNumber = (numbers, currMin = Number.MAX_VALUE) => {
  const localMin = Math.min(...numbers);
  return localMin < currMin ? localMin : currMin;
};
