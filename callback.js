arr = ["Geeks", "Geeks", "pop", "Geeks"]
console.log("calling")

let value = arr.filter(function (element) {
    if (element != "pop")
        return element
});

console.log("called")
console.log(value)