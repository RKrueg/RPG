//UI LOGIC

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Monster from './monster';
import Character from "./player";



function handleWizard(event) {
  event.preventDefault();

  let newWizard = new Character(0, 0);
  let newMonster = new Monster(100,100);

  const showButtons = document.getElementById("playerChooseDiv");
  showButtons.setAttribute("class", "hidden");


  const hideWizardStats = document.getElementById("displayWizardWeapons");
  hideWizardStats.removeAttribute("class", "hidden");
  newWizard.Wizard();

  const wand = document.getElementById("wand").value;
  document.getElementById("wand").onclick = function () {
    newWizard.wizardWeapon(wand);
    hideWizardStats.setAttribute("class", "hidden");
    const displayWarrior = document.getElementById("displayWarriorAttack");
    displayWarrior.removeAttribute("class", "hidden");
    const displayMonsterAttack = document.getElementById("displayMonsterAttack");
    displayMonsterAttack.removeAttribute("class", "hidden");
    console.log(newWizard.strength);
  };
  const staff = document.getElementById("staff").value;
  document.getElementById("staff").onclick = function () {
    newWizard.wizardWeapon(staff);
    hideWizardStats.setAttribute("class", "hidden");
    const displayWarrior = document.getElementById("displayWarriorAttack");
    displayWarrior.removeAttribute("class", "hidden");
    const displayMonsterAttack = document.getElementById("displayMonsterAttack");
    displayMonsterAttack.removeAttribute("class", "hidden");
    console.log(newWizard.strength);
  };

  const broom = document.getElementById("broom").value;
  document.getElementById("broom").onclick = function () {
    newWizard.wizardWeapon(broom);
    hideWizardStats.setAttribute("class", "hidden");
    const displayWarrior = document.getElementById("displayWarriorAttack");
    displayWarrior.removeAttribute("class", "hidden");
    const displayMonsterAttack = document.getElementById("displayMonsterAttack");
    displayMonsterAttack.removeAttribute("class", "hidden");

    console.log(newWizard.strength);
  };

  //let wizardWithWand = document.getElementById("wizardWithWand").value;
  document.getElementById("wizardWithWand").onclick = function () {
    newMonster.takeDamage();
  console.log(newMonster);
  };

  document.getElementById("monster").onclick = function () {
    newWizard.takeDamage();
  console.log(newWizard);
  };

}

function handleArcher(event) {
  event.preventDefault();

  let newArcher = new Character(0, 0);
  const showButtons = document.getElementById("playerChooseDiv");
  showButtons.setAttribute("class", "hidden");

  const hideArcherStats = document.getElementById("displayArcherWeapons");
  hideArcherStats.removeAttribute("class", "hidden");
  newArcher.Archer();

  const bow = document.getElementById("bow").value;
  document.getElementById("bow").onclick = function () {
    newArcher.archerWeapon(bow);
    hideArcherStats.setAttribute("class", "hidden");
    const displayWarrior = document.getElementById("displayWarriorAttack");
    displayWarrior.removeAttribute("class", "hidden");
    const displayMonsterAttack = document.getElementById("displayMonsterAttack");
    displayMonsterAttack.removeAttribute("class", "hidden");
    console.log(newArcher.strength);
  };
}

function handleSpy(event) {
  event.preventDefault();

  let newSpy = new Character(0, 0);
  const showButtons = document.getElementById("playerChooseDiv");
  showButtons.setAttribute("class", "hidden");

  const hideSpyStats = document.getElementById("displaySpyWeapons");
  hideSpyStats.removeAttribute("class", "hidden");
  newSpy.spy();

  const stealth = document.getElementById("stealth").value;
  document.getElementById("stealth").onclick = function () {
    newSpy.spyWeapon(stealth);
    hideSpyStats.setAttribute("class", "hidden");
    const displayWarrior = document.getElementById("displayWarriorAttack");
    displayWarrior.removeAttribute("class", "hidden");
    const displayMonsterAttack = document.getElementById("displayMonsterAttack");
    displayMonsterAttack.removeAttribute("class", "hidden");
    console.log(newSpy.strength);
  };

  // function handleMonster(event) {
  //   event.preventDefault();

  //   let newMonster = new Monster(100,100);
  // }
}

window.addEventListener('load', function () {
  const showButtons = document.getElementById("playerChooseDiv");
  showButtons.removeAttribute("class", "hidden");
  const wizard = document.getElementById("wizard");
  wizard.addEventListener('click', handleWizard);
  const archer = document.getElementById("archer");
  archer.addEventListener('click', handleArcher);
  const spy = document.getElementById("spy");
  spy.addEventListener('click', handleSpy);

  const hideWizardStats = document.getElementById("displayWizardWeapons");
  hideWizardStats.setAttribute("class", "hidden");


});