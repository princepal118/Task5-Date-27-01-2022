
//definre the class name is Stack 

class Stack{
    constructor(){
        this.items = []; // array initialization 
    }
    //this is used to push elements in the array ;
    push(element){
        return this.items.push(element);

    }

    pop(){
       
        for(let i =this.items.length;i>0;i--){
            this.items.pop();

        }
        // return this.items;
        
    }

    //This used to print stack
    printStack(){
        console.log(this.items);

    }

    //This function is used to check array is empty or not if not then present the size of the array.
    checkArrayEmptyOrNot(){
        if(this.items.length < 0){
            return "Array is Empty";
        }
        else{
            return "The array is not empty and the size of array is  "+this.items.length;
        }
    }
}

var  stack = new Stack();   // create the object of the class here.

stack.push(1);     //push first element 
stack.push(5);     
stack.push(9);
stack.push(2);
// this.items;


//To print stack this function is used Here.
stack.printStack();


//Delete the Elements from an array We use pop method.

stack.pop();



stack.printStack();

//To see Array is empty or not if array is not empty then the length of the array is defines here.
console.log(stack.checkArrayEmptyOrNot());

