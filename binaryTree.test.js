const maxDepth = require("./binaryTree")

// test the farthest leaf node 


// test something
// test('test something',() => {
//     expect(1).toBe(true);
// })

test('should create an empty tree', () => {
    const bst = this.root = null;
    expect(bst).toBe(null);


})

test('should return maximum depth', () => {
    const bst = this.root = 1;
    const leftbst = this.root.left = 2;
    const rightbst = this.root.right = 3;
    // const leftbst2 = this.root.left.left = 4;
    // const rightbst2 = this.root.right.right = 5;
    expect(maxDepth).toBe(3);
})