function foo(a,b){    a = a === null ? 0 : a;    b = b === null ? 0 : b;    if(a === 0 || b === 0) {        return 0;    }    return a+b;}
console.log(foo(0,1)); //Output: 0
console.log(foo(1,0)); //Output: 0
console.log(foo(null,1)); //Output: 1
console.log(foo(1,null)); //Output: 1