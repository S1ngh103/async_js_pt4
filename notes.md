# Asynchronous JavaScript Part 3

### Workers

- Give ability to run tasks in different threads
- Issues:
    - Access to same data in different threads
    - Bugs caused by inconsistent data
- How to fix it:
    - Don't use shared variables in workers, make them unique
    and name them specifically

### Types of Workers
- Dedicated
- Shared
- Service

### Using Web Workers
- Generating prime numbers
- Example code files:
    - generate.js
    - index.html
    - styles.css
    - main.js

    #### Handling Messages:
    - When a message is received, the worker checks the content of the message.
    - If the main script passed the "generate" command, it calls the generatePrimes() function, passing in the quota value from the message event.
    #### Generating Primes:
    - The generatePrimes() function is similar to the synchronous version from our other asynchronous programming assignment but it is changed for asynchronous execution in the worker.
    - This allows us to do other tasks while we generate prime numbers since that'll just freeze our computers
    - Worker sends a message to the main script when the computation is complete.
    - Message is sent using the postMessage() function, which is globally available in a worker.

### How other Workers work
- Shared workers are shared b/w different scripts which can be in differing windows too
- Service workers are like proxy servers, they cache resources for offline functionality. Used heavily in Progressive Web Apps.