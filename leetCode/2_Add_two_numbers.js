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
var addTwoNumbers = function(l1, l2) {

    //dummy head é o ponteiro para uma nova lista.
    let dummyHead = new ListNode(0);
    //current é o ponteiro atual para preencher a nova lista, sem perder a referencia.
    let current = dummyHead;
    //carry é o resto da soma. ex: 6+4 = 10, neste caso fica o zero e sobe o 1
    let carry = 0;

    while (l1 || l2 || carry) {

        //soma os valores de ambas as listas
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        //pega o que passou de 9 na soma.
        carry = Math.floor(sum / 10);

        //fazer o numero modulo 10. pra trazer sempre o ultimo digito do numero.
        current.next = new ListNode(sum % 10);

        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

    }

    return dummyHead.next
     
};
