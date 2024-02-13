if (window.Worker) {
    const myWorker = new Worker('worker.js');

    const number = Math.floor(Math.random() * 11); // random number between 0 and 10

    myWorker.postMessage({ command: 'factorial', number });

    myWorker.onmessage = function (event) {
        console.log(`Factorial of ${number} is :`, event.data);
    };

    myWorker.onerror = function (error) {
        console.error('Error:', error);
    };
} else {
    console.error('Web workers not supported');
}
