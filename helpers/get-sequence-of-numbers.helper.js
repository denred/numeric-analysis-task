const getLastElement = (arr) => (arr.length > 0 ? arr[arr.length - 1] : null);

const saveArray = (sourceArray, targetArray) => {
  if (targetArray.length > sourceArray.length && targetArray.length > 1) {
    sourceArray.splice(0, sourceArray.length, ...targetArray);
  }
};

const setArray = (arr, num) => {
  arr.splice(0, arr.length, num);
};

export const getSequenceOfNumbers = ({
  numbers,
  tempIncSequence,
  tempDecSequence,
  incSequence,
  decSequence,
}) => {
  for (const num of numbers) {
    const lastElementInc = getLastElement(tempIncSequence);
    const lastElementDec = getLastElement(tempDecSequence);

    if (lastElementInc === null || num > lastElementInc) {
      tempIncSequence.push(num);
    } else {
      saveArray(incSequence, tempIncSequence);
      setArray(tempIncSequence, num);
    }

    if (lastElementDec === null || num < lastElementDec) {
      tempDecSequence.push(num);
    } else {
      saveArray(decSequence, tempDecSequence);
      setArray(tempDecSequence, num);
    }
  }

  saveArray(incSequence, tempIncSequence);
  saveArray(decSequence, tempDecSequence);
};
