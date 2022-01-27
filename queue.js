

class Queue{

    constructor(){

        this.items =[];

    }


    deletion(){

        for(let i =this.items.length;i>0;i--){
            
            this.items.shift();
        }

    }


    addingElments(element){

        return this.items.push(element);
    
    }

    printQueue(){
        return this.items;
    }

    addElementAtFirst(num){
        return this.items.unshift(num);
    }




}   



var queue = new Queue();

// addingElements method is used to add the elements in the array.
queue.addingElments(2);
queue.addingElments(4);
queue.addingElments(1);
queue.addingElments(8);
queue.addingElments(9);


//delete all Elements from array 

// queue.deletion();


//add Element at the First Index of the array we use Here unshift;
queue.addElementAtFirst(100);


//printQueue method is used to print the array 
console.log(queue.printQueue());




