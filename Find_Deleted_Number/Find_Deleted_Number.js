function findDeletedNumber(arr, mixArr) {
    // your code
    if (arr.length === 0) return 0;

    return arr.reduce( (a, c) => a + c) + mixArr.reduce( (a, c) => a - c, 0);

  }


  console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5])); // 2, 'Deletion'
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8])); // 5, 'Deletion'
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3])); // 0, 'No deletion'