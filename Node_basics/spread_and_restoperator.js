
//Spread 
const a =['Sports','cooking']
const b =[...a]
b.push('Programming')

console.log(a);
console.log(b)

const c={name:'john'}
const d = {...c,age:23}
console.log(c,d)

//REST Operator
const toArray = (...args) => {
    return args
}
console.log(toArray(1,2,3,4,5,6))
