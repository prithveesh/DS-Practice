var nextPermutation = function (nums) {
  const l = nums.length - 1;
  let i = l - 1, small = false, j;
  while (i >= 0) {
    j = i + 1;
    while (j > i) {
      if (!small && nums[j] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        if (l - i > 1) {
          small = true;
          j = l;
          continue;
        } else {
          return;
        }
      } else if (small && nums[j - 1] > nums[j]) {
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
        // return;
      }
      j--;
    }
    i--;
  }

  if (small) return;
  nums.sort((a, b) => a - b)
};

var arr = [1, 3, 2];
nextPermutation(arr);
console.log(arr);