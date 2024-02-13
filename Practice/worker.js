// Function to calculate the factorial of a number (took from CHATGPT)
function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

self.addEventListener('message', function (event) {
    const { command, number } = event.data;
    if (command === 'factorial') {
        const factorial = calculateFactorial(number);
        postMessage(factorial);
    }
});
