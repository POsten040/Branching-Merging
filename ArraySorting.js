
function SortArray(arr, startIndex = 0) {
  if(startIndex === pivot){
    return;
  }
  const pivot = arr[arr.length - 1];

  let arrLower = [];
  let arrHigher = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const el = arr[i];
    if(arr[pivot] > arr[startIndex]){
      arrLower.push(arr[startIndex])
    }
    if(arr[pivot] <= arr[startIndex]){
      arrHigher.push(arr[startIndex])
    }
  }
  return SortArray(arrLower);
}


//