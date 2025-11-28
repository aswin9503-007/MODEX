const multiplication = (numberOne, numberTwo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numberOne < 0 || numberTwo < 0) {
                return reject("Only positive numbers allowed");
            }
            resolve(numberOne * numberTwo);
        }, 1000);
    });
};

// Call for positive numbers
multiplication(5, 3)
    .then((product) => {
        console.log("The product is:", product);
    })
    .catch((error) => {
        console.log(error);
    });

// Call for negative numbers
multiplication(5, -3)
    .then((product) => {
        console.log("The product is:", product);
    })
    .catch((error) => {
        console.log(error);
    });