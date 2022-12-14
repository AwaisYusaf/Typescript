var promptSync = require("prompt-sync");
var Prompt = promptSync();
// Single Linked List
var node = /** @class */ (function () {
    function node(value) {
        this.value = value;
        this.next = null;
    }
    return node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.head = null;
        this.tail = null;
        this.insert = function (value) {
            var new_node = new node(value);
            if (_this.head === null) {
                _this.head = new_node;
                _this.tail = new_node;
            }
            else {
                _this.tail == null ? {} : _this.tail.next = new_node;
                _this.tail = new_node;
            }
        };
        this.print = function () {
            var start = _this.head;
            while (start != null) {
                console.log(start.value);
                start = start.next;
            }
        };
        console.log("Linked list initialized");
    }
    return LinkedList;
}());
function menu() {
    console.log("\nPress\n1.Insert Value\n2.Delete Value\n3.Print List\n4.Exit\n\n");
}
var quit = false;
var list = new LinkedList();
while (!quit) {
    menu();
    var choice = parseInt(Prompt("Your Choice:"));
    if (choice === 1) {
        var number = parseInt(Prompt("Enter number:"));
        list.insert(number);
    }
    else if (choice === 2) {
    }
    else if (choice === 3) {
        console.log("Linked List Data:");
        list.print();
    }
    else if (choice === 4) {
        quit = true;
    }
}
