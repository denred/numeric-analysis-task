export const displayPerformance = (startTime) => {
  const endTime = performance.now();
  console.log(
    'Elapsed Time:',
    Math.floor((endTime - startTime) / 1000),
    'seconds',
  );
};
