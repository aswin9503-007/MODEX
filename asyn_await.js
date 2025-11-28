function resolveLater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('GeeksforGeeks');
        }, 2000);
    });
}

async function waitForGeeksforGeeks() {
    console.log('calling');
    const result = await resolveLater();
    console.log(result);
}

waitForGeeksforGeeks();