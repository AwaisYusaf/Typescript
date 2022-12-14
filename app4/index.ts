const promptSync = require("prompt-sync");
const Prompt = promptSync();

// Single Linked List
class node {
    value: number;
    next: node | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    head: null | node = null;
    tail: null | node = null;
    constructor() {
        console.log("Linked list initialized");
    }
    insert = (value: number) => {
        let new_node = new node(value);
        if (this.head === null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail == null ? {} : this.tail.next = new_node;
            this.tail = new_node;
        }
    }
    print = () => {
        let start = this.head;
        while (start != null) {
            console.log(start.value);
            start = start.next;
        }
    }
}
function menu() {
    console.log("\nPress\n1.Insert Value\n2.Print List\n3.Exit\n\n");
}
let quit = false;
let list = new LinkedList();
while (!quit) {
    menu();
    const choice = parseInt(Prompt("Your Choice:"));
    if (choice === 1) {
        const number = parseInt(Prompt("Enter number:"));
        list.insert(number);
    }
    else if (choice === 2) {
        console.log("\nLinked List Data:");
        list.print();
        console.log("\n");
    }
    else if (choice === 3) {
        quit = true;
    }
}