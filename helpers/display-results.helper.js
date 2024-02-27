export const displayResults = ({
  min,
  max,
  median,
  average,
  incSequence,
  decSequence,
}) => {
  console.log('File reading complete.');
  console.log('Max:', max);
  console.log('Min:', min);
  console.log('Median:', median);
  console.log('Average:', average);
  console.log('Increasing sequences:', incSequence);
  console.log('Decreasing sequences:', decSequence);
};
