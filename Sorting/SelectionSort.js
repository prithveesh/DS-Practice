function SelectionSort(arr) {
  const l = arr.length;
  let counter = 0;
  const sort = () => {
    for (i = 0; i < l - 1; i++) {
      let index = 0;
      let small = arr[i];
      for (j = i + 1; j < l; j++) {
        counter++;
        if (small > arr[j]) {
          index = j;
          small = arr[j];
        }
      }
      if (index) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
      }
    }
  }

  sort();
  console.log(counter, arr);
}

SelectionSort([5, 4, 3, 2, 1])
console.log('---------------------------')
SelectionSort([1, 2, 3, 5, 4, 1])
console.log('---------------------------')
SelectionSort([17, 25, 31, 13, 2])