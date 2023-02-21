console.log("Hello ts again!");

let a: boolean = false;
let num: number = 123;
let str: string = "String name";
let array: Array<string> = ["one", "two", "three", "four", "five", "six"];
let arrayAnother: string[] = ["one", "two", "three", "four", "five"];

let obj: object[] = [
	{
		name: "First",
	},
	{
		name: "Last",
	},
];

interface User {
	id: number;
	name: string;
}

let userAdmin: User = {
	id: 1,
	name: "Name admin",
};

function loadInfo(info: User) {
	console.log(info.name);
}

loadInfo(userAdmin);

//functions
const addNewUser = (id: number, name: string, position: string) => {
	console.log(`${id}: ${name}, new ${position}`);
	return "Complete";
};
addNewUser(1, "Tom", "FE");

const summ = (a: number, b: number): void => {
	console.log(a + b);
};

summ(12, 23);

const parseObject = (obj: object): void => {
	Object.keys(obj).forEach((item) => {
		console.log(item + " " + obj[item as keyof typeof obj]);
	});
};

const params = {
	id: 3453,
	price: 500,
	user: "AlexS",
	comment: "Lorem ipsum",
};

parseObject(params);

const isAdmin = (obj: { name: string; role: string }): void => {
	if (obj.role === "admin") {
		console.log(`${obj.name} is admin`);
	} else {
		console.log("access denied");
	}
};

const user32 = {
	id: 32,
	name: "Leonard",
	role: "user",
};

isAdmin(user32);

//aliases
type stringNumber = string | number;

type Person = {
	id: stringNumber;
	name: string;
};

const Tom: Person = {
	id: "123",
	name: "Tom",
};

console.log(Tom);

let x: [string, number, string];
x = ["lorem", 2, "ipsum"];

//enum

enum Color {
	red,
	green,
	blue,
}

let c: Color = Color.red;

enum Joystick {
	Up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right",
}

//unknown

let unk: unknown = 1000;
unk = "299";

//any
let color: any = "red";
color = 342432;

let un: undefined = undefined;
let n: null = null;

//void
function handleError(): void {
	console.error("error!");
}

function say(name: string): string {
	return `${name} Hello!`;
}

function error(message: string): never {
	throw new Error(message);
}

function fail() {
	return error("Something went wrong");
}

//console.log(fail());

//DOM

const body = document.querySelector("body") as HTMLElement | null;
body?.classList.add("tan");
body ? (body.style.color = "white") : null;

////////////////////////////////
//Generics
////////////////////////////////
const generateID = <T extends { firstName: string; lastName: string }>(
	obj: T
) => {
	let ID = Math.floor(Math.random() * 1000);
	return {
		...obj,
		ID,
	};
};

const adminParams = <T>(arg: T) => {
	if (typeof arg == "number") {
		console.log(`admin id is ${arg}`);
	} else if (typeof arg == "string") {
		console.log(`admin name is ${arg}`);
	} else if (typeof arg == "object") {
		console.log(`admin params is ${JSON.stringify(arg)}`);
	}
};

console.log(adminParams({ id: 43, user: "Alex" }));

let newUser = generateID({ firstName: "Leo", lastName: "Lemmingson" });

function getValue<Type>(arg: Type): Type {
	return arg;
}

interface UserData<X> {
	name: X;
	rollNo: number;
}

let userobject: UserData<object> = {
	name: {
		fist: "Alexis",
		last: "Sanchez",
	},
	rollNo: 1,
};

let userstring: UserData<string> = {
	name: "Sandro",
	rollNo: 1,
};
