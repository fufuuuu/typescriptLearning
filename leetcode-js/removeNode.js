var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0,head);//虚拟头节点，使头节点的操作同其他节点一致
  let fast =head;
  let slow = dummy;
  for(let i = 0;i<n;i++){//快指针先走n步
      fast = fast.next;
  }
  while(fast!=null){//快慢指针一起走，两者相差n步，快指针到底，慢指针下一个点就是要删除的节点
      fast = fast.next;
      slow = slow.next;
  }
  slow.next=slow.next.next;
  return dummy.next;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

console.log(removeNthFromEnd(ListNode,2))