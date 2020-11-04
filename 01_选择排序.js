// 选择排序：O(n^2)
let arrList = [2, 5, 7, 1, 6, 3, 8, 10, 9, 12, 0];
let newArr = [];
// 将数组元素按照从小到大的顺序排列。
// 现编写用于找出数组中最小元素的函数，返回最小元素的索引：
let findSmallest = (arr) => {
    let smallest = arr[0]; // 存储最小的值
    let smallest_index = 0; // 存储最小元素的索引
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    //console.log('smallest_index: ', smallest_index);
    return smallest_index;
}

// 对数组进行排序：
let sortArr = (arr) => {
    let newArr_smallest = findSmallest(arr);
    newArr.push(arr[newArr_smallest]);
    arr.splice(newArr_smallest, 1);
    if (arr.length > 0) {
        sortArr(arr);
    }
    console.log(newArr)
    return newArr;
}
sortArr(arrList)