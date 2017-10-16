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
