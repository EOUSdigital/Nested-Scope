//TODO 📚 Module 4 - Lesson 06.02 Nested Scope - Challenge


//TODO  🛠️ Project Challenge: “Secure Access Panel”

//* 🎯 Goal:
// 🔰 Create a function that simulates a secure panel login. Only the correct passcode allows access. The passcode must remain hidden and protected using nested scope.

//* 📋 Requirements:

//? 🔹 1. Create a function createAccessPanel()
//  • Inside, declare a const passcode (e.g., "open123")
//  • Do not expose this variable globally

//? 🔹 2. Inside createAccessPanel, define a nested function checkAccess(input)
//  • input is a parameter passed by the user
//  • If input === passcode, log: "Access granted ✅"
//  • Otherwise, log: "Access denied ❌"

//? 🔹 3. Return an object with a method tryCode(code)
//  • When tryCode is called, it passes the code to checkAccess
//  • Only this method can trigger access checks — no direct access to passcode

//? 🔹 4. Simulate usage

const panel = createAccessPanel();
panel.tryCode("12345");                                     //  Access denied   ❌
panel.tryCode("open123");                                   //  Access granted  ✅

//? 💡 Example Output:

//  Access denied   ❌
//  Access granted  ✅

//? ✅ Commenting Reminder
//  As requested, please include comments before each line explaining what the line does and why.

//! Solution

function  createAccessPanel() {
    const passcode = "open123";

    function checkAccess(input) {
        if (input === passcode) {
            console.log("Access granted ✅");
        } else {
            console.log("Access denied ❌");
        }
    }
    return {
        tryCode: function(code) {
            checkAccess(code);
        }
    };
}

const panel2 = createAccessPanel();

panel2.tryCode("12345");
panel2.tryCode("open123");


















































