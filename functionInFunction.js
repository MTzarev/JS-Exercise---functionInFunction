function add(num){
    let result = function sum(n){
        return num+n
    } 
    return result
}
let add5 = add(5)
console.log(add5(2));
console.log(add(5)(2));
console.log(add5(3));
