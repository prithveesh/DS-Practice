function MergeSort(arr) {
  const l = arr.length;
  let counter = 0;
  const merge = (a, mid, b) => {
    let i = a;
    let j = mid + 1;
    const temp = [];
    let index = a;
    while (i <= mid && j <= b) {
      counter++;
      if (arr[i] <= arr[j]) {
        temp[index++] = arr[i];
        i++;
      } else if (arr[i] > arr[j]) {
        temp[index++] = arr[j];
        j++;
      }
    }
    while (i <= mid) {
      counter++;
      temp[index++] = arr[i++];
    }
    while (j <= b) {
      counter++;
      temp[index++] = arr[j++];
    }
    for (let i = a; i <= b; i++) {
      // counter++;
      arr[i] = temp[i];
    }
  }

  const sort = (start, end) => {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    sort(start, mid);
    sort(mid + 1, end);
    merge(start, mid, end);
  }

  sort(0, l - 1);
  console.log(counter, arr);
}

MergeSort([5, 4, 3, 2, 1])
console.log('---------------------------')
MergeSort([1, 2, 3, 5, 4, 1])
console.log('---------------------------')
MergeSort([17, 25, 31, 13, 2])