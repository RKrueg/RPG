export default class Monster {
	constructor(hp, strength) {
		this.hp = hp;
		this.strength = strength;
	}
	takeDamage() {
		this.hp = this.hp - 10;
	}
}