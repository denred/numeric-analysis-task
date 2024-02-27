export const getRawSumAndCount = (
  numbers,
  prev = { sum: BigInt(0), count: 0 },
) =>
  numbers.reduce(({ sum, count }, num) => {
    sum = BigInt(sum) + BigInt(num);
    count += 1;
    return { sum, count };
  }, prev);
