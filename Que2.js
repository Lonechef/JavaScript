

const shape = {
  radius: 20, // This is ignored by the arrow function
  diameter() {
    return this.radius * 2;
  },
  perimeter () {
    const calc = () =>  2*Math.PI*this.radius;
    return calc();
  },
};

console.log(shape.diameter()); // Output: 40 (uses shape.radius)
console.log(shape.perimeter()); // Output: 62.83185307179586 (uses global radius)
/*
this in Regular Functions:

In a regular function (like diameter), the value of this depends on how the function is called.

When shape.diameter() is called, this refers to the shape object.

this in Arrow Functions:

Arrow functions (like perimeter) do not have their own this. Instead, they inherit this from the surrounding lexical scope (the scope in which the arrow function is defined).

In this case, the surrounding scope is the global scope (or the module scope in strict mode), so this refers to the global object (window in browsers, global in Node.js).

Global Object:

In non-strict mode, the global object is window (in browsers) or global (in Node.js).

In strict mode, this in the global scope is undefined.

 */
/*
Regular Functions:

Use this dynamically based on how the function is called.

Suitable for methods that need to access the object’s properties.

Arrow Functions:

Do not have their own this; they inherit this from the surrounding scope.

Not suitable for object methods that rely on this to access the object’s properties.

Global Scope:

In non-strict mode, this in the global scope refers to the global object.

In strict mode, this in the global scope is undefined.


*/
