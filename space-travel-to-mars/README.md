# OO Space Travel To Mars

Traveling to Mars is challenging, so is this lab.

In this lab you're going to create two classes, `CrewMember` and `Ship`. By default these two classes can't communicate with each other, so you're going to need to apply your OO JavaScript skills (think magic) to make cool things happen such as launching, fixingShip, and landing.

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
  this.crew = [];
  this.ability = ability;
}
```

## Spec 3
Crew member can enter a ship via the method `enterShip`. By calling this method on a `CrewMember` instance, the ship attribute of that instance will be assigned to the ship argument being passed into this method. We can pass an instance of `Ship` class into this method, something like:
```JavaScript
var mav = new Ship('MAV','Mars Ascent Vehicle', 'Ascend into low orbit');
var martinez = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
```
