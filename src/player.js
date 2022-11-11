export default class Character {
  constructor(hp, strength) {
    this.hp = hp;
    this.strength = strength;
  }
  Wizard() {
    this.hp += 75;
    this.strength += 90;
    return `${this.hp}, ${this.strength}`;
  }
  wizardWeapon(weapon) {
    this.weapon = weapon;
    if (this.weapon === 'wand') {
      this.strength += 100;
    } else if (this.weapon === 'staff') {
      this.strength += 75;
    } else {
      this.strength += 25;
    }
    return this.strength;
  }
  Archer() {
    this.hp += 50;
    this.strength += 80;
    return `${this.hp}, ${this.strength}`;
  }
  archerWeapon(weapon) {
    this.weapon = weapon;
    if (this.weapon === 'bow') {
      this.strength += 20;
    }
    return this.strength;
  }
  spy() {
    this.hp += 100;
    this.strength += 50;
  }
  spyWeapon(weapon) {
    this.weapon = weapon;
    if (this.weapon === 'stealth') {
      this.strength += 80;
    }
    return this.strength;
  }
  takeDamage() {
    this.hp = this.hp - 10;
  }
  giveDamage() {
    this.hp += 5;
  }

  train() {
    this.strength += 15;
  }
} 
