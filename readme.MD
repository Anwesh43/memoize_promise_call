# memoize_promise_call

### Don't promise the same thing again 🙅. Memoize it 💪

### Why we need to memoization?

#### there are situation where the client makes the same promise call again and again. Imagine if there is a critical promise call which takes a lot of time and we make the same call again how much of your client's precious time will be lost 😱. To avoid this we should memoize 👌.  

### Usage

```
    const memoizePromise = require('memoize_promise_call').memoizePromise

    fetch = memoziePromise(fetch)

    fetch('https://www.example.org').then((res)=>res.json()).then((data)=>{
        //Do something here
    })

    // 2nd time it won't make the request simply give you the response

    fetch('https://www.example.org').then((res)=>res.json()).then((data)=>{
        //Do something here
    })s
```
