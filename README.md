# Promise-pattern-js

# Asynchronous programming
In the simple words, when you execute the task asynchronously, the program moves to the next line of code before the task finishes.
think of synchronous programming be like waiting in line, and asynchronous programming like taking ticket. When you take a ticket you can do other things and then be notified when ready.
Promises are a far cleaner solution to writing asynchronous code.

# Promise
A promise is a special object that contain their own condition. 
1. Pending - waiting
2. Fullfilled - done
3. Rejected - error

Промис(Обещание) — это объект который содержит будущее значение асинхронной операции. Например, если вы запрашиваете некоторые данные с сервера, промис обещает нам получить эти данные, которые мы сможем использовать в будущем.

# then mehod
Then method will check if the promise is resolve or rejected.
For example if we have two promises: The waiter promises us to bring dish, and we in our side promises to pay to the dish if waiter brings it. In this situation then() method solves our case

# Async/Await
Async and await makes the code more readable and understandable
