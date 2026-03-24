import {test} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Runs before all Test");
})

test.afterAll(async()=>{
    console.log("Runs after all Test");
});

test.beforeEach(async()=>{
    console.log("Runs before every test");
});

test.afterEach(async()=>{
    console.log("Runs after every test");
});

test('Test 1', async()=>{
    console.log("Test 1 Executed");
});

test('Test 2', async()=>{
    console.log("Test 2 Executed");
});

test('Test 3', async()=>{
    console.log("Test 3 Executed");
});

test('Test 4', async()=>{
    console.log("Test 4 Executed");
});

test('Test 5', async()=>{
    console.log("Test 5 Executed");
});




//beforeAll() ==> It runs once before all tests //DB Connection, Global Setup
//afterAll() ==> It runs once after all  Test //DB conncetion, Final Clean up
//beforeEach() ==> It runs before every test //open application before test //login setup
//afterEach() ==> It runs after every test //Take screenshot, Logout, Clear Cookies 




