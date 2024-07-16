// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test('Should return that the organization is a non-profit', function(){
    let output = launchcode.organization;
    expect(output).toEqual('nonprofit');
});

  test('Should return that the executive director is Jeff', function(){
    let output = launchcode.executiveDirector;
    expect(output).toEqual('Jeff');
  });

  test('Should return that the percentage of cool employees', function(){
    let output = launchcode.percentageCoolEmployees;
    expect(output).toEqual(100);
  });

  test('Should return that the programs offered are web development, data analysis and liftoff', function(){
    let output = launchcode.programsOffered;
    expect(output).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
  });


  test('Should return that correct output when a number is only divisible by 2', function(){
    let output = 4;
    expect(launchcode.launchOutput(output)).toEqual('Launch!');
  });

  test('Should return that correct output when a number is only divisible by 3', function(){
    let output = 21;
    expect(launchcode.launchOutput(output)).toEqual('Code!');
  });

  test('Should return that correct output when a number is only divisible by 5', function(){
    let output = 5;
    expect(launchcode.launchOutput(output)).toEqual('Rocks!');
  });

  test('Should return that correct output when a number is divisible by 2 and 3', function(){
    let output = 36;
    expect(launchcode.launchOutput(output)).toEqual('LaunchCode!');
  });

  test('Should return that correct output when a number is divisible by 3 and 5', function(){
    let output = 45;
    expect(launchcode.launchOutput(output)).toEqual('Code Rocks!');
  });

  test('Should return that correct output when a number is divisible by 2 and 5', function(){
    let output = 10;
    expect(launchcode.launchOutput(output)).toEqual('Launch Rocks! (CRASH!!!!)');
  });

  test('Should return that correct output when a number is divisible by 2, 3 and 5', function(){
    let output = 30;
    expect(launchcode.launchOutput(output)).toEqual('LaunchCode Rocks!');
  });

  test('Should return that correct output when a number is not divisible by 2, 3 and 5', function(){
    let output = 7;
    expect(launchcode.launchOutput(output)).toEqual(`Rutabagas! That doesn't work.`);
  });

});