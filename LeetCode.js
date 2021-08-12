
//Add Two Numbers https://leetcode.com/problems/add-two-numbers/solution/
//seems to work? leetCode wont accept so I am surely wrong. 
const l1 = [2,4,3];
const l2 = [5,6,4];
const l3 = [9,9,9,9,9,9,9];
const l4 = [9,9,9,9];
const zero = [0]


var addTwoNumbers = function(l1, l2) {
  const str1 = l1.reverse().join("");
  const str2 = l2.reverse().join("");
  const num1 = parseInt(str1);
  const num2 = parseInt(str2);
  const sumInt = num1 + num2;
  const sumStrArr = String(sumInt).split("");
  return sumStrArr.map((str) => {
      return Number(str);
  })
};

// let result = addTwoNumbers(l1,l2)
// console.log(result)
// const resolveRemainder = (sumArr, carry =0, index =0, outPut=[]) => {
//   if(index > sumArr.length -1){
//     return outPut;
//   }
//   if(sumArr[index] > 9){
//     outPut.push(sumArr[index] % 10);
//     carry = 1;
//     index ++;
//     return resolveRemainder(sumArr, carry, index, outPut)
//   }
//   if(sumArr[index] < 10){
//     outPut.push(sumArr[index] + carry)
//     carry = 0;
//     index ++;
//     return resolveRemainder(sumArr, carry, index, outPut)
//   }
// }

// const patAdd2Num = (l1, l2, carry, result = []) => {
//   if()
// }
// console.log(resolve(sumArr))
// const result1 = patAdd2Num(l1, l2);
// const result2 = patAdd2Num(zero, zero);
// const result3 = patAdd2Num(l3, l4);
// console.log(result1)
// console.log(result2)
// console.log(result3)

var addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let current = 0;
  console.log(current)
  let result = current;
  while(l1 || l2) {
      if(l1) {
          sum += l1.val;
          l1 = l1.next;
          console.log(l1)
      }
      if(l2) {
          sum += l2.val;
          l2 = l2.next;
          console.log(l2)
      }
      current.next = sum % 10;
      current = current.next;
      sum = sum > 9 ? 1 : 0;
  }
  if(sum) {
      current.next = new ListNode(sum);
  }
  return result.next;
};
console.log(addTwoNumbers(l1, l2))