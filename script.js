





//Classes
class AttackingMechanism{
    attack(enemy){
        if(this.accuracy > enemy.accuracy){
            console.log("It's a direct hit!");
            console.log("Damage: -", this.firepower);
            enemy.hull -= this.firepower;
            if (enemy.hull <= 0){
                console.log("Spaceship has fallen!");
            }
        }

    }
}


class AlienSpaceship extends AttackingMechanism{
    constructor (hull=0, firepower=0, accuracy=0){
        super();
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

class HumanSpaceship extends AttackingMechanism{
    constructor(hull, firepower, accuracy){
        super();
        this.hull = hull;
        this.firepower=firepower;
        this.accuracy=accuracy;

    }
}



//GAME BEGINS

console.log("Space-battle begins!\n");
// //myShip
let USS_Assembly =  new HumanSpaceship(20,5,.7);
console.log("My Stats:\n ",USS_Assembly);

console.log(USS_Assembly);

let enemies= [];
for( let i=0; i<6; i++){
    enemies.push( new AlienSpaceship());
    
}

console.log(enemies,"\n");
console.log("You attacked first! ");
USS_Assembly.attack(enemies[0]);
console.log(enemies[0]);

enemies[0].attack(USS_Assembly);
console.log(USS_Assembly);

