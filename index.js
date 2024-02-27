import fs from 'fs';
import readline from 'readline';
import {
  getRawSumAndCount,
  getAverage,
  getMaxNumber,
  getMinNumber,
  getSequenceOfNumbers,
  getMedian,
  displayPerformance,
  processChunkLine,
  displayResults,
} from './helpers/helpers.js';

const FILE_PATH = '10m.txt';

const startTime = performance.now();
let max = null;
let min = null;
let sumAndCountObject = { sum: BigInt(0), count: 0 };
const median = [];
const tempIncSequence = [];
const tempDecSequence = [];
const incSequence = [];
const decSequence = [];

const processChunk = (numbers) => {
  max = getMaxNumber(numbers, max);
  min = getMinNumber(numbers, min);
  sumAndCountObject = getRawSumAndCount(numbers, sumAndCountObject);
  median.push([...numbers]);
  getSequenceOfNumbers({
    numbers,
    tempIncSequence,
    tempDecSequence,
    incSequence,
    decSequence,
  });
};

const readStream = fs.createReadStream(FILE_PATH, {
  encoding: 'utf-8',
});

const rl = readline.createInterface({
  input: readStream,
});

rl.on('line', (line) => {
  processChunkLine(line, processChunk);
});

readStream.on('end', () => {
  displayResults({
    min,
    max,
    median: getMedian(median),
    average: getAverage(sumAndCountObject),
    incSequence,
    decSequence,
  });
  displayPerformance(startTime);
});

readStream.on('error', (err) => {
  console.error('Error reading the file:', err);
});
