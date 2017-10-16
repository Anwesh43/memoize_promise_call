class MemoizeTree {
    constructor() {
        this.root = new MemoizeNode()
        this.root.data = "root"
    }
    getNodeRecur(args,root) {
        for(var i=0;i<root.children.length;i++) {
            const child = root.children[i]
            if(child.data == args[0]) {
                args.splice(0,1)
                if(args.length == 0) {
                    return child
                }
                else {
                    return this.getNodeRecur(args,child)
                }
            }
        }
        return null
    }
    getNode(args) {
        return this.getNodeRecur(args,this.root)
    }
    addChild(args,root) {
        const node = new MemoizeNode(args[0])
        args.splice(0,1)
        root.children.push(node)
        if(args.length == 0) {
            return
        }
        this.addChild(args,node)
    }
    addSuccessResult(fnName,args,result) {
        const fnNode = this.getNode([fnName])
        //console.log(fnNode)
        //console.log(fnName)
        //console.log(args)
        if(fnNode != null) {

            this.addChild([JSON.stringify(args),result],fnNode)
        }
        else {
            this.addChild([fnName,JSON.stringify(args),result],this.root)
        }
    }
    getSuccessResult(fnName,args) {
        const node = this.getNode([fnName,JSON.stringify(args)])
        if(node != null && node.children.length == 1) {
            return node.children[0].data
        }
        return null
    }
}
class MemoizeNode {
    constructor(data) {
        this.data = data
        this.children = []
    }
    addChild(data) {
        const node = new MemoizeNode(data)
        this.children.push(node)
    }
    getChild(data) {
        if(typeof(data) == "string") {
            for(var i=0;i<this.children.length;i++) {
                const child = this.children[i]
                if(child.data == data) {
                    return child
                }
            }
            return null
        }
        return null
    }
}
const memoizeTree = new MemoizeTree()
module.exports = memoizeTree
