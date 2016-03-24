'use strict';
//require assert
var assert = require('assert');

var jobAbilities = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

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

// var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
// var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
//
// crewMember1.enterShip(mav);
// console.log(crewMember1.ship);
// console.log(mav.crew);
// console.log(crewMember1.ship === mav);
// console.log(mav.crew.indexOf(crewMember1) === 0);

//your code here



//tests
describe('CrewMember', function(){
  it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
    var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    assert.equal(crewMember1.name, 'Rick Martinez');
    assert.equal(crewMember1.job, 'pilot');
    assert.equal(crewMember1.specialSkill, 'chemistry');
    assert.equal(crewMember1.ship, null);
  })

  it('can enter a ship', function(){
    var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    crewMember1.enterShip(mav);
    assert.equal(crewMember1.ship, mav);
    assert.equal(mav.crew.length, 1);
    assert.equal(mav.crew[0], crewMember1);
  })
})

describe('Ship', function(){
  it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
    var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    assert.equal(mav.name, 'Mars Ascent Vehicle');
    assert.equal(mav.type, 'MAV');
    assert.equal(mav.ability, 'Ascend into low orbit');
    assert.equal(mav.crew.length, 0);
  })
})
