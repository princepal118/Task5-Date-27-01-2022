//By using Struct i  create the node and the class node is Node.


class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}



class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }


    
    // Add the Element at the End of the list 
    add(element)
    {
	    // creates a new node
	    var node = new Node(element);

	    // to store current node
	    var cur;

	    // if list is Empty add the
	    // element and make it head
	    if (this.head == null)
	    	this.head = node;
	    else {
		    cur = this.head;

		    // iterate to the end of the
		    // list
		    while (cur.next) {
			    cur = cur.next;
		    }

		    // add node
		    cur.next = node;
	    }
	    this.size++;
    }

    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }



    
}

var linkList = new LinkedList();
linkList.add(2);
linkList.add(3);
linkList.add(5);
linkList.add(1);


linkList.printList();
//output is     2 3 5 1

