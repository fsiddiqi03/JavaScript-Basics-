// allows you to change the variable 
let myName = 'barry';



// set a constant varaible where you cant change it 
const number = 17;


// create an object with properties 
let human = {
    name: 'Bob',
    age: 30
};

// use dot notation to change 
human.age = 17;

let selection = 'name';

// user brackets to change elements 
human[selection] = 'barry';


// arrays 
let colors = ['red', 'blue'];


function printName(name) {
    console.log(name)
};


// stirct equality operator (Type + value)
// console.lop(1 === 1);

// lose equality operators (value)
// console.lop(1 == 1);



let points = 100

// if the statement is true will set type to Gold else Silver 
let type = points > 100 ? 'Gold': 'Silver';


// you can use the or to check if there is value missing 
// this would return the defualt color instead because user color is null
let userColor = null;
let defualtColor = 'red';
// console.log(userColor || defualtColor)



/*

let a = 'blue';
let b = 'red';

let prevA = a
a = b;
b = prevA;
console.log(a)
console.log(b)
*/


/*
let i = 0

while(i < 10){
    //console.log('yur')
    i++
}
*/

/*
const person = {
    firstName: 'faris',
    age: 30,
    hairColor: 'black'
};
*/

/* the in will iterate through the index of the elements, if you use 'of' it will iterate through the objects in the element 
for(let i in person){
    if (person[i] == 'faris'){
        // console.log(i, person[i], 'here');
        break;
    }
}
*/


/*
function maxOf(x,y) {
    console.log(Math.max(x,y));
}

maxOf(7,5);
*/

/*
function isLandscape(width, height){
    return width > height;
}

if (isLandscape(17,20)){
    console.log('yippee')
}
*/

// speed limit = 70
// 5 over -> 1 point
// points > 12 -> suspended 
/*
function checkSpeed(speed){
    let points = 0

    points += Math.floor((speed - 70) / 5)

    if (points <= 0){
        console.log(ok)
    } 
    else if(points <= 12){
        console.log('points:',points)
    }

    else {
        console.log('suspended')
    }
}   


checkSpeed(180)
*/

/*

function showNumber(num){
    let i = 0
    while(i <= num){
        if(i % 2 == 0){
            console.log(i,'EVEN')
        }
        else{
            console.log(i,'ODD')
        }
        i++
    }
}


showNumber(10)

*/

/*
function showProperties(object){
    for(let i in object){
        if(typeof object[i] == 'string'){
            console.log(i, object[i])
        }
    }
}


let movies = {
    title:'bob',
    views: 900,
    age: 18,
    type: 'comedy'

};

showProperties(movies)

*/

/*
function sum(limit){
    let result = 0
    for(let i = 0; i <= limit; i++){
        if(i % 5 == 0){
            result += i;
        }
        else if (i % 3 == 0){
            result += i;
        }
    }
    console.log(result)
}

sum(10)
*/



/*
function calculateGrade(marks){
    total = 0
    for(let i of marks){
        total += i
    }
    percent = total / marks.length

    if(90 <= percent){
        return 'A'
    }
    else if(80 <= percent){
        return 'B'
    }
    else if(70 <= percent){
        return 'C'
    }
    else if(60 <= percent){
        return 'D'
    }
    else if(1 <= percent){
        return 'F'
    }
}


grade = [90, 80, 77, 55]
console.log(calculateGrade(grade))
*/


/*
function showStars(rows){
    for(let i = 1; i <= rows; i++){
        stars = ' '
        for(let k = 1; k <= i; k++){
            stars += '*'
        }
        console.log(stars)
    }
}

showStars(35)
*/

// Object Oriented programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisble: true,
    draw: function() {
        console.log('draw');
    }
};


// Factory Function 
function createCircle(radius){
   return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1)


// Constructor Function 
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const myCircle = new Circle(1);




// primitives are coppied by their reference types 
// objects are copied by their reference types
/*
let x = { value: 10 }
let y = x
x.value = 20;
*/



// clone a object 
//const another = Object.assign({}, circle);


// string primitive 
const message = 'hello world';
// string object 
const word = new String('hello');