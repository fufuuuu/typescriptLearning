/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
l1 = ListNode[2,4,3], l2 = ListNode[5,6,4]
// var addTwoNumbers = function(l1, l2) {
//   var S = ListNode
//   if(l1.val == 0){

//   }
// };

// console.log(addTwoNumbers(l1,l2))
console.log(l1,l2)