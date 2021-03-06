function heap_root(input, i, array_length) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < array_length && input[left] > input[max]) {
    max = left;
  }

  if (right < array_length && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  let temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

function heapSort(input) {
  let array_length = input.length;

  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(input, i, array_length);
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    array_length--;

    heap_root(input, 0, array_length);
  }
}

module.exports = {
  heapSort
};
