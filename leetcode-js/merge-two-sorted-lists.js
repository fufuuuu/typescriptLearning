// merge-two-sorted-lists
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
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// let mergeTwoLists = (l1, l2) => {
//   if(!l1) return l2
//   if(!l2) return l1
//   if(l1.val<l2.val){
//       l1.next = mergeTwoLists(l1.next, l2)
//       return l1
//   }else{
//       l2.next = mergeTwoLists(l1, l2.next)
//       return l2
//   }
// };
// var mergeTwoLists = function(l1, l2) {
//   if(l1) return l1
//   if(l2) return l2
//   if(l1.val < l2.val){
//     l1.next = mergeTwoLists(l1.next,l2)
//     return l1
//   }else{
//     l2.next = mergeTwoLists(l1,l2.next)
//     return l2
//   }
// };

// 递归合并两有序链表
function mergeTwoLists(l1, l2) {
  if(l1) return l1
  if(l2) return l2

  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }else{
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}


const l1 = new ListNode(2)
const l2 = new ListNode(3)
const n3 = new ListNode(44)


l1.next = l2
l2.next = n3


console.log(mergeTwoLists(l1,l2))


