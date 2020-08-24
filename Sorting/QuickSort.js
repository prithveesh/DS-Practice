function QuickSort(arr) {
  const l = arr.length;
  let counter = 0;


  const pivoting = (start, end) => {
    const pivot = arr[end];
    for (let i = start; i < end; i++) {
      counter++;
      if (arr[i] < pivot) {
        [arr[i], arr[start]] = [arr[start], arr[i]];
        start++;
      }
    }
    if (arr[start] > pivot) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
    }
    return start;
  }

  const sort = (start, end) => {
    if (start >= end) return;
    const pi = pivoting(start, end);
    sort(start, pi - 1);
    sort(pi + 1, end);
  }

  sort(0, l - 1);
  console.log(counter, arr);
}

QuickSort([5, 4, 3, 2, 1])
console.log('---------------------------')
QuickSort([1, 2, 3, 5, 4, 1])
console.log('---------------------------')
QuickSort([17, 25, 31, 13, 2])