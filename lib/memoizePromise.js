const memoizePromise = (promiseFN) => {
    return function(){
        const args = arguments
        const name = promiseFn.name
        const promise = new Promise((resolve,reject)=>{
            promiseFn.apply(null,arguments).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })
        })
        return promise
    }
}
module.exports = memoizePromise
