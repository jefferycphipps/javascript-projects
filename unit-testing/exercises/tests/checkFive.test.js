const checkFive = require('../checkFive.js');

describe("checkFive", function(){

 
    test("check to see if 2 is equal to 5, should be less than 5.", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
 
});
