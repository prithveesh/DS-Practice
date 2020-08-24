function BubbleSort(arr) {
  let counter = 0;
  const l = arr.length;
  const sort = () => {
    for (let i = 0; i < l; i++) {
      let swapped = false
      for (j = 1; j < l - i; j++) {
        counter++;
        if (arr[j] < arr[j - 1]) {
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
          swapped = true
        }
      }
      if (!swapped) break
    }
  }

  sort();
  console.log(counter, arr);
}

BubbleSort([5, 4, 3, 2, 1]);
console.log('---------------------------')
BubbleSort([1, 2, 3, 5, 4, 1]);
console.log('---------------------------')
BubbleSort([17, 25, 31, 13, 2]);