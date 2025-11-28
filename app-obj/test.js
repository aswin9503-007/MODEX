// const { error } = require("console")

// //promise.all()
// const p1= Promise.reject("task 1")
// const p2= Promise.resolve("task 2")
// const p3= Promise.resolve("task 3")

// Promise.any([p1,p2,p3]).then(result => console.log(result)).catch(error => console.log("Err:",error))

app.route("/user").get((req,res) =>{
    res.send("hello")
}).post((req,res) => {
    res.send("how r u")
}).put((req,res) => {
    res.send("what u doing")
});