const memoizeTree = require('./MemoizeTree')
const memoizePromise = (promiseFn) => {
    return function(){
        const args = arguments
        const name = promiseFn.name
        const promise = new Promise((resolve,reject)=>{
            const memoizeResult = memoizeTree.getSuccessResult(name,args)
            if(memoizeResult != null) {
                resolve(memoizeResult)
                return
            }
            promiseFn.apply(null,args).then((data)=>{
                resolve(data)
                memoizeTree.addSuccessResult(name,args,data)
            }).catch((err)=>{
                reject(err)
            })
        })
        return promise
    }
}
module.exports = memoizePromise
