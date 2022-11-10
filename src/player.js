export default class Character {
  constructor(hp, strength) {
    this.hp = hp;
    this.strength = strength;
  }
  Wizard() {
    this.hp += 75;
    this.strength += 90;
  }
  Archer() {
    this.hp += 50;
    this.strength += 80;
  }
  spy() {
    this.hp += 100;
    this.strength += 50;
  }
  takeDamage(){
    this.hp = this.hp - 10;
  }
  giveDamage(){
    this.hp += 5; 
  }

  train(){
    this.strength += 15;
  }
} 