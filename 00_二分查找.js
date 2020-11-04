 //使用二分查找可以在有序数组里，快速找到答案
 let answer = 7;
 let answerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let binary_search = (guess) => {
     if (guess > answer) {
         let max = guess;
         let maxIndex = answerList.findIndex(e => e == max);
         answerList.splice(maxIndex);
         console.log('大了')
     }
     if (guess < answer) {
         let min = guess;
         let minIndex = answerList.findIndex(e => e == min);
         answerList.splice(0, minIndex+1);
         console.log('小了')
     }
     if (guess == answer) {
         console.log('您真聪明！');
     }
 }
 binary_search(5);
 binary_search(8);