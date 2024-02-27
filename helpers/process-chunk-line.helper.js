const CHUNK_SIZE = 3;
const chunkLine = [];

export const processChunkLine = (line, processChunkFunction) => {
  const number = parseInt(line);
  if (!isNaN(number)) {
    chunkLine.push(number);
    if (chunkLine.length === CHUNK_SIZE) {
      processChunkFunction(chunkLine);
      chunkLine.length = 0;
    }
  }
};
