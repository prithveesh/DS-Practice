function InsertionSort(arr) {
  const l = arr.length;
  let counter = 0;
  const sort = () => {
    for (let i = 1; i < l; i++) {
      let elem = arr[i];
      let j = i - 1;
      while (j >= 0) {
        counter++;
        if (arr[j] > elem) {
          arr[j + 1] = arr[j];
        } else {
          break;
        }
        j--;
      }
      arr[j + 1] = elem;
    }
  }
  sort();
  console.log(counter, arr);
}

InsertionSort([5, 4, 3, 2, 1]);
console.log('---------------------------')
InsertionSort([1, 2, 3, 5, 4, 1]);
console.log('---------------------------')
InsertionSort([17, 25, 31, 13, 2]);