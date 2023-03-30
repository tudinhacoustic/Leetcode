/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let f = new ListNode();
    let c = f;
    while (list1 || list2) {
        if (list2 == null || (list1 != null && list1.val <= list2.val)) {
            f.next = list1;
            f = f.next;
            list1 = list1.next;
        } else {
            f.next = list2;
            f = f.next;
            list2 = list2.next;
        }
    }
    return c.next;
};
