function CrewMember(name, job, specialSkill){
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;

  this.enterShip(ship) {
    this.ship = ship;
  }




}

function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.crew = [];
  this.ability = ability;


}
