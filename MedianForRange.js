function activityNotifications(a, d, n) {
    let result = 0, s = 0, i, j, k = Math.floor(d / 2), isEven = !(d % 2);
    let arr = a.slice(0, d);
    arr.sort((a, b) => a - b);
    for (i = d; i < n; i++) {
        let med = arr[k];
        if (isEven) {
            med = (Math.floor((med + arr[k - 1]) / 2) + 1);
        }

        if (med * 2 <= a[i]) result++;
        insertRemove(arr, a[i], a[i - d]);
    }
    return result;
}

function insertRemove(arr, ins, del) {
    if (del === ins) return;
    deleteElem(arr, del, 0);
	insertElem(arr, ins, 0);
	console.log(arr);
}

function insertElem(arr, ins, start) {
    let end = arr.length - 1;
    let mid;
    do {
        mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === ins) {
            arr.splice(mid, 0, ins);
            return arr;
        } else if (arr[mid] < ins) start = mid + 1;
        else end = mid - 1;
    } while (start <= end);
    arr.splice(start, 0, ins);
}

function deleteElem(arr, del, start) {
    let end = arr.length - 1;
    let mid;

    do {
        mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === del) {
            arr.splice(mid, 1);
            return arr;
        } else if (arr[mid] < del) start = mid + 1;
        else end = mid - 1;
    } while (start <= end);
}

// insertElem([10, 20, 30, 40, 50], 55, 0);
// insertElem([10, 20, 30, 40, 50], 39, 0);
// insertElem([10, 20, 30, 40, 50], 42, 0);
// insertElem([10, 20, 30, 40, 50], 50, 0);
// insertElem([10, 20, 30, 40, 50], 0, 0);
// insertElem([10, 20, 30, 40, 50], 30, 0);

insertRemove([10, 20, 30, 40, 40, 50], 50, 30);
insertRemove([10, 20, 30, 40, 50], 40, 10);
insertRemove([10, 20, 30, 40, 50], 10, 20);
insertRemove([10, 20, 20, 30, 40, 50], 20, 30);
insertRemove([30, 30, 30, 40, 50], 30, 50);
insertRemove([10, 20, 30, 30, 40, 50], 0, 20);

// activityNotifications([10, 20, 30, 40, 50], 3, 5);
// activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5, 9);