const binarySearch = require("./binarySearch");

describe("binarySearch", () => {
    // test it returns the target if the target exist 
    test("returns the correct target if target exist", () => {
        const array=[4, 6, 8, 10, 12, 14, 22];
        expect(binarySearch(array))
    })
})

// test it returns the target if the target exist 
// test it returns -1 when the index does not exist 

// test it actually is sorted in an ascending order
