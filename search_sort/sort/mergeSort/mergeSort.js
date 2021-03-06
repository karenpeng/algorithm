function mergeSort(arr) {

  if (arr.length <= 1) {

    return;

  } else {

    var mid = Math.floor(arr.length / 2);
    var lefthalf = arr.slice(0, mid);
    var righthalf = arr.slice(mid, arr.length);

    mergeSort(lefthalf);
    mergeSort(righthalf);

    var i = 0,
      j = 0,
      index = 0;

    while (i < lefthalf.length && j < righthalf.length) {
      if (lefthalf[i] >= righthalf[j]) {
        arr[index] = righthalf[j];
        j++;
        index++;
      } else {
        arr[index] = lefthalf[i];
        i++;
        index++;
      }
    }

    while (i < lefthalf.length) {
      arr[index] = lefthalf[i];
      i++;
      index++;
    }

    while (j < righthalf.length) {
      arr[index] = righthalf[j];
      j++;
      index++;
    }

  }

}

test1 = [4, 6, 13, 6, 2, 7]
test2 = [5, 3, 135, 3, 6]
test3 = [1]

console.log(mergeSort(test1))
console.log(mergeSort(test2))
console.log(mergeSort(test3))