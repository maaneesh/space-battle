





//Classes



class AlienSpaceship {
    constructor (hull=0, firepower=0, accuracy=0){
        this.hull = this.randomHull(3,6);
        this.firepower = this.randomFirePower(2,4);
        this.accuracy = this.randomAccuracy(.6,.8);

    }

    //Randomize functions
    // hull - between 3 and 6
    randomHull(min,max){
        let randNum = Math.random()*(max-min);

        if (randNum < min){
        randNum = Math.round(randNum)+min;
        }
    return  randNum;
    }


    // firepower - between 2 and 4
    randomFirePower(min,max){

        let randNum = Math.random()*(max-min);

        if (randNum < min){
        randNum = Math.round(randNum)+min;
        }
    return  randNum;
    }

    // accuracy - between .6and .8

    randomAccuracy(min,max){

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

}

class HumanSpaceShip{
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower=firepower;
        this.accuracy=accuracy;

    }
}



//GAME BEGINS

console.log("Space-battle begins!");
// //myShip
let USS_Assembly =  new HumanSpaceShip(20,5,.7);
console.log("My Stats:\n ",USS_Assembly.accuracy);

console.log(USS_Assembly);

let enemies = [];
for( let i=0; i<6; i++){
    enemies.push( new AlienSpaceship());
    
}

console.log({enemies});



// let inWar= true;



// //let USS_Assembly = new Spaceship(20, 5, .7);







// //console.log(enemies[0].accuracy,enemies[0].hull, enemies[0].accuracy);
// console.log("total enemyShips: ",shipCount);
// //console.log(USS_Assembly.accuracy,USS_Assembly.hull, USS_Assembly.accuracy);



// let enemy1 = attack.bind(enemies[0]);
// enemy1();


// // battleLoop();

// // function battleLoop (){

// //     for (let i=0 ; i<shipCount; i++){
// //         enemies[0]= attack.bind(enemies[0]);
// //         enemies[0];
       
// //     }

// // }


// function updateShipCount() {

    
// }
// function peaceRestored(){
//     console.log("world peace!");
// }


// let enemy1 = stats.bind(enemies[0]);
// let enemy2 = stats.bind(enemies[1]);
// let enemy3 = stats.bind(enemies[2]);
// let enemy4 = stats.bind(enemies[3]);
// let enemy5 = stats.bind(enemies[4]);
// let enemy6 = stats.bind(enemies[5]);



// console.log("enemy1:",enemy1());
// console.log("enemy2:",enemy2());
// console.log("enemy3:",enemy3());
// console.log("enemy4:",enemy4());
// console.log("enemy5:",enemy5());
// console.log("enemy6:",enemy6());
// console.log("myship :",mySpaceship());