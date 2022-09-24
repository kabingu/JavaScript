class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node(2)
let b = new Node(4)
let c = new Node(5)
let d = new Node(6)
let e = new Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

console.log(a)


function sum(head) {
    let sum = 0;
    let current = head;
    
    while (current !== null) {
        sum+=current.val
        current = current.next
    }
    return sum
}

console.log(sum(a))