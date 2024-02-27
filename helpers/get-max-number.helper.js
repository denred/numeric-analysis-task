export const getMaxNumber = (numbers, currMax = Number.MIN_VALUE) => {
  const localMax = Math.max(...numbers);
  return localMax > currMax ? localMax : currMax;
};
