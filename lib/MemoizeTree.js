class MemoizeTree {
    constructor() {
        this.root = new MemoizeNode()
    }
    getNodeRecur(args,root) {
        for(var i=0;i<root.children.length;i++) {
            const child = this.children[i]
            if(child.data == args[0]) {
                args.splice(0,1)
                if(args.length == 0) {
                    return node
                }
                else {
                    return this.getNodeRecur(args,child)
                }
            }
        }
        return null
    }
    getNode(args) {
        this.getNodeRecur(args,this.root)
    }
    addChild(args,root) {
        const node = new MemoizeNode(args[0])
        args.splice(0,1)
        if(args.length == 0) {
            return
        }
        this.addChild(args,node)
    }
    addSuccessResult(fnName,arguments,result) {
        const fnNode = this.getNode([fnName])
        if(fnNode != null) {
            this.addChild([JSON.stringify(arguments),result],fnNode)
        }
        else {
            this.addChild([fnName,JSON.stringify(arguments),result],this.root)
        }
    }
    getSuccessResult(fn,arguments) {
        const node = this.getNode([fnName,JSON.stringify(arguments)])
        if(node != null && node.children.length == 1) {
            return JSON.parse(node.children.length)
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
