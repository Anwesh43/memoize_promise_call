const memoizePromise = require('../lib/memoizePromise')
function delayPromise(delay){
      const promise = new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve({delayLn:delay})
          },delay*1000)
    })
    return promise
}
delayPromise = memoizePromise(delayPromise)
delayPromise(10).then((data)=>{
    console.log(data)
    delayPromise(10).then((data)=>{
        console.log(data)
        delayPromise(10).then((data)=>{
            console.log(data)
        })
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>{
    console.log(err)
})
