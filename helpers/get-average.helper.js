export const getAverage = ({ sum, count }) =>
  Number((BigInt(sum) * BigInt(100)) / BigInt(count)) / 100;
