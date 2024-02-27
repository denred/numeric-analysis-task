import PriorityQueue from 'fastpriorityqueue';

export const getMedian = (chunks) => {
  const minHeap = new PriorityQueue((a, b) => a < b);
  const maxHeap = new PriorityQueue((a, b) => a > b);

  for (const chunk of chunks) {
    const sortedChunk = chunk.sort((a, b) => a - b);

    for (const num of sortedChunk) {
      minHeap.add(num);
      maxHeap.add(minHeap.poll());

      if (minHeap.size < maxHeap.size) {
        minHeap.add(maxHeap.poll());
      }
    }
  }

  return minHeap.size === maxHeap.size
    ? (minHeap.peek() + maxHeap.peek()) / 2
    : minHeap.peek();
};
