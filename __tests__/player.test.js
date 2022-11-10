import Character from "../src/player";

describe('Character', () => {
  let newCharacter;


  beforeEach(() => {
    newCharacter = new Character(0, 0);
  });

  test('this should return 75 hP and 90 strength from the wizard prototype', () => {
    newCharacter.Wizard();
    expect(newCharacter.hp).toEqual(75);
    expect(newCharacter.strength).toEqual(90);
  });

  test('this should return 50 hp and 80 strength from the archer prototype', () => {
    newCharacter.Archer();
    expect(newCharacter.hp).toEqual(50);
    expect(newCharacter.strength).toEqual(80);
  });

  test('this should return 50 hp and 80 strength from the spy prototype', () => {
    newCharacter.spy();
    expect(newCharacter.hp).toEqual(100);
    expect(newCharacter.strength).toEqual(50);
  });

  test('this should return 65 to hp', () => {
    newCharacter.Wizard();
    newCharacter.takeDamage();
    expect(newCharacter.hp).toEqual(65);
  });

  test('this should return 80 to hp', () => {
    newCharacter.Wizard();
    newCharacter.giveDamage();
    expect(newCharacter.hp).toEqual(80);
});

test('this should return 105 to strength', () => {
  newCharacter.Wizard();
  newCharacter.train();
  expect(newCharacter.strength).toEqual(105);
});

});