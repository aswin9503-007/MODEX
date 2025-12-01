// arr = ["Geeks", "Geeks", "pop", "Geeks"]
// console.log("calling")

// let value = arr.filter(function (element) {
//     if (element != "pop")
//         return element
// });

// console.log("called")
// console.log(value)

const fetchdata=(callback)=>{
    setTimeout(()=>{
        callback('function excuted')
    },1500)
}

setTimeout (()=>{
    fetchdata((result) =>{
        console.log(result);
    })
},2000)

console.log("Hi");
console.log("Hello");

