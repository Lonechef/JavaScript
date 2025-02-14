for(var i=0;i<3;i++){
    setTimeout(()=>console.log(i),1)
}
for(let i=0;i<3;i++){
    setTimeout(() => console.log(i),1)
}

//var : Global Scope that is it is hoisted at the top
//let and const : BLocked scope
//The callback is added to the callback queue (also called the task queue) and executed after the main thread (synchronous code) is done.
//Var is acessible outside the loop so  basically over here till we wait the i reaches 3 and get stored in the global variable and due to which its value get sticked as 3
//so for var 3,3,3

//Scope of i: For var

// Since var is function-scoped, i is hoisted to the global scope (or the top of the function if this code is inside a function).

// There is only one i shared across all iterations of the loop.

//Scope of i : For let

// Scope of i:

// Since let is block-scoped, a new i is created for each iteration of the loop.

// Each setTimeout callback captures its own i in its closure.
//When the loop ends, i is 3, but this i is not accessible outside the loop.
/*
Event Queue and Execution:
Synchronous Execution:
The first for loop (var) runs:

i is incremented from 0 to 3.

Three setTimeout callbacks are scheduled, each with a delay of 1ms.

The second for loop (let) runs:

A new i is created for each iteration (0, 1, 2).

Three setTimeout callbacks are scheduled, each with a delay of 1ms.

Asynchronous Execution (Event Loop):
After the synchronous code finishes, the event loop processes the callback queue.

The setTimeout callbacks are executed in the order they were added to the queue.

Final Output:
First loop (var): 3, 3, 3

Second loop (let): 0, 1, 2


*/