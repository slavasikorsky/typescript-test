"use strict";
console.log("Hello ts again!");
let a = false;
let num = 123;
let str = "String name";
let array = ["one", "two", "three", "four", "five", "six"];
let arrayAnother = ["one", "two", "three", "four", "five"];
let obj = [
    {
        name: "First",
    },
    {
        name: "Last",
    },
];
let userAdmin = {
    id: 1,
    name: "Name admin",
};
function loadInfo(info) {
    console.log(info.name);
}
loadInfo(userAdmin);
//functions
const addNewUser = (id, name, position) => {
    console.log(`${id}: ${name}, new ${position}`);
    return "Complete";
};
addNewUser(1, "Tom", "FE");
const summ = (a, b) => {
    console.log(a + b);
};
summ(12, 23);
const parseObject = (obj) => {
    Object.keys(obj).forEach((item) => {
        console.log(item + " " + obj[item]);
    });
};
const params = {
    id: 3453,
    price: 500,
    user: "AlexS",
    comment: "Lorem ipsum",
};
parseObject(params);
const isAdmin = (obj) => {
    if (obj.role === "admin") {
        console.log(`${obj.name} is admin`);
    }
    else {
        console.log("access denied");
    }
};
const user32 = {
    id: 32,
    name: "Leonard",
    role: "user",
};
isAdmin(user32);
const Tom = {
    id: "123",
    name: "Tom",
};
console.log(Tom);
let x;
x = ["lorem", 2, "ipsum"];
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let c = Color.red;
var Joystick;
(function (Joystick) {
    Joystick["Up"] = "Up";
    Joystick["Down"] = "Down";
    Joystick["Left"] = "Left";
    Joystick["Right"] = "Right";
})(Joystick || (Joystick = {}));
//unknown
let unk = 1000;
unk = "299";
//any
let color = "red";
color = 342432;
let un = undefined;
let n = null;
//void
function handleError() {
    console.error("error!");
}
function say(name) {
    return `${name} Hello!`;
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something went wrong");
}
//console.log(fail());
//DOM
const body = document.querySelector("body");
body === null || body === void 0 ? void 0 : body.classList.add("tan");
body ? (body.style.color = "white") : null;
////////////////////////////////
//Generics
////////////////////////////////
const generateID = (obj) => {
    let ID = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { ID });
};
const adminParams = (arg) => {
    if (typeof arg == "number") {
        console.log(`admin id is ${arg}`);
    }
    else if (typeof arg == "string") {
        console.log(`admin name is ${arg}`);
    }
    else if (typeof arg == "object") {
        console.log(`admin params is ${JSON.stringify(arg)}`);
    }
};
console.log(adminParams({ id: 43, user: "Alex" }));
let newUser = generateID({ firstName: "Leo", lastName: "Lemmingson" });
function getValue(arg) {
    return arg;
}
let userobject = {
    name: {
        fist: "Alexis",
        last: "Sanchez",
    },
    rollNo: 1,
};
let userstring = {
    name: "Sandro",
    rollNo: 1,
};
