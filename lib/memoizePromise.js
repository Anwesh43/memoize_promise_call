const memoizeTree = require('./MemoizeTree')
const memoizePromise = (promiseFn) => {
    return function(){
        const args = arguments
        const name = promiseFn.name
        const promise = new Promise((resolve,reject)=>{
            const memoizeResult = memoizeTree.getSuccessResult(promiseFn,arguments)
            if(memoizeResult != null) {
                resolve(memoizeResult)
                return
            }
            promiseFn.apply(null,arguments).then((data)=>{
                resolve(data)
                memoizeResut.addSuccessResult(promiseFn,arguments,data)
            }).catch((err)=>{
                reject(err)
            })
        })
        return promise
    }
}
module.exports = memoizePromise
