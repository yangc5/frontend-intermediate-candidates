# OO Space Travel To Mars

Traveling to Mars is challenging, so is this lab.

In this lab you're going to create two classes, `CrewMember` and `Ship`. By default these two classes can't communicate with each other, so you're going to need to apply your OO JavaScript skills to make cool things such as launching, fixing a ship, and landing happen.

## Spec 1
Create a class `CrewMember`, this class will have instance attributes `name`, `job`, `specialSkill`, and `ship`. The `ship` will initially be null.
```JavaScript
function CrewMember(name, job, specialSkill){
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;
}
```

## Spec 2
Create a class `Ship`, this class will have instance attributes `name`, `type`, `crew`, and `ability`. The `crew` will be an empty array upon instantiation.
```JavaScript
function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
}
```

## Spec 3
Crew member can enter a ship via the method `enterShip`. By calling this method on a `CrewMember` instance, the ship attribute of that instance will be assigned to the ship argument passed into this method. We can pass an instance of `Ship` class into `enterShip` method, and this function will also push the 'CrewMember' instance to the ship's crew array using `.push(this)`. for example:
```JavaScript
function CrewMember(name, job, specialSkill){
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;

  this.enterShip = function(ship){
    this.ship=ship;
    ship.crew.push(this);
  }
}

function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
}

var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');

crewMember1.enterShip(mav);
console.log(crewMember1.ship); //mav
console.log(mav.crew); //[crewMember1]
console.log(crewMember1.ship === mav); //true
console.log(mav.crew.indexOf(crewMember1) === 0); //true
```

## Spec 4
Each crew member has a different job and so does a type of ships. Only a pilot can fly a MAV, only a mechanic can use a repair ship, and only a commander is responsible for directing the main ship.

An object with key value pairs is provided to you as a global variable in this app. The keys correspond to crew members' jobs, and the values correspond to ships' types. A crew member can only perform her job correctly in the right type of ship.

By the way, if a crew member's job is programmer, then she can do her job on any ship, because software programmers are awesome.

```JavaScript
var jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
}
```

In `Ship` class, write a instance method `missionStatement`: this method will return "Can't perform a mission yet." if none of the ship's crew has the correct job that matches this ship type; and it will return this ship's ability if there is a crew member that has a correct job that matches the ship type.


## Spec 5

Make sure all tests pass.
