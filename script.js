


class Spaceship {
    constructor (hull=0, firepower=0, accuracy=0){
        this.hull = randomHull(3,6);
        this.firepower = randomFirePower(2,4);
        this.accuracy = randomAccuracy(.6,.8);

    }
}



// hull - between 3 and 6
function randomHull(min,max){
    let randNum = Math.random()* (max-min);

    if (randNum < min){
       randNum = Math.round(randNum)+min;
    }

   return  randNum;
}


// firepower - between 2 and 4
function randomFirePower(min,max){

    let randNum = Math.random()* (max-min);

    if (randNum < min){
       randNum = Math.round(randNum)+min;
    }

   return  randNum;
}

// accuracy - between .6and .8

function randomAccuracy(min,max){

    let randNum = (Math.random()*max);
    randNum = ((randNum%Math.random())*Math.random());
    randNum = (Math.random()*randNum);

    if (randNum < min){
        randNum +=min;
    }
    if (randNum >max){
        randNum = randNum%max;
    }

   return  parseFloat(randNum.toFixed(2));
}

///ACTIONS

function attack(object){
    


}
// for (let index = 0; index < 100; index++) {

// console.log("Hull",randomHull(3,6));
// console.log("FirePower",randomFirePower(2,4));
// console.log("Accuracy",randomAccuracy(.6,.8));

    
// }

let USS_Assembly = new Spaceship(20, 5, .7);

console.log(USS_Assembly);

let ship1 = new Spaceship();
let ship2 = new Spaceship();
let ship3 = new Spaceship();
let ship4 = new Spaceship();
let ship5 = new Spaceship();
let ship6 = new Spaceship();






console.log({ship1},"\n",{ship2},"\n",{ship3},"\n",{ship4},"\n",{ship5},"\n");
