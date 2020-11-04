// 快速排序O(n*log n)

// 首先了解递归：函数调用自己就是递归
// 假设你要写一个倒计时函数
function recursive(n) {
    console.log(n)
    if (n > 0) {
        recursive(n - 1)
    } else {
        console.log('time out');
        return
    }
}
// recursive(5);

// 其次了解调用栈，栈是一种先入后出的数据结构。计算机内部使用被称为调用栈的栈。

function greet2(name) {
    console.log('how are you, ' + name + '?');
}

function bye() {
    console.log('ok bye');
}

function greet(name) {
    console.log('hello, ' + name + '!');
    greet2(name);
    console.log('getting ready to say bye');
    bye();
}

greet('fzb')

// 快速排序O(n*log n),在最糟情况下，栈长为O(n)，而在最佳情况下，栈长为O(logn)。
let ary = [2, 5, 7, 1, 6, 3, 8, 10, 9, 12, 0];


function quickSort(ary_list) {
    if (ary_list.length <= 1) {
        return ary_list;
    } else {
        let standard_value = ary_list.splice(0, 1);
        let left_list = [];
        let right_list = [];
        for (let i = 0; i < ary_list.length; i++) {
            if (ary_list[i] < standard_value) {
                left_list.push(ary_list[i]);
            } else {
                right_list.push(ary_list[i]);
            }
        }
        console.log('left_list:', left_list, 'standard_value:', standard_value, 'right_list:', right_list)
        return [].concat(quickSort(left_list), standard_value, quickSort(right_list));
    }
}

console.log(quickSort(ary));
/*
❑ D&C将问题逐步分解。使用D&C处理列表时，基线条件很可能是空数组或只包含一个元素的数组。❑ 实现快速排序时，请随机地选择用作基准值的元素。快速排序的平均运行时间为O(n log n)。❑ 大O表示法中的常量有时候事关重大，这就是快速排序比合并排序快的原因所在。❑ 比较简单查找和二分查找时，常量几乎无关紧要，因为列表很长时，O(logn)的速度比O(n)快得多。


*/