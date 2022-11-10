import Character from "../src/player";

describe('Character', () => {
  let newCharacter;


  beforeEach(() => {
    newCharacter = new Character(0, 0);
  });

  test('this should return 75 hP and 90 strength from the wizard prototype', () => {
    newCharacter.Wizard();
    expect(newCharacter.hP).toEqual(75);
    expect(newCharacter.strength).toEqual(90);
  });

  test('this should return 50 hP and 80 strength from the archer prototype', () => {
    newCharacter.Archer();
    expect(newCharacter.hP).toEqual(50);
    expect(newCharacter.strength).toEqual(80);
  });

});