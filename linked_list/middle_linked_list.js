function middleLinkedList (head) {

    let ahead = head

    while (ahead && ahead.next) {
        head  = head.next
        ahead = ahead.next.next
    }

    return head

}

