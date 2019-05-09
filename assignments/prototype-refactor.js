class GameObject {
  constructor(attributes) {
    this.name = attributes.name;
    this.createdAt = new Date();
    this.dimensions = attributes.dimensions || {
      length: 0,
      width: 0,
      height: 0
    };
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes)
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
  attack(character, power) {
    console.log(`${this.name} hit ${character.name} for ${power} HP!`);
    return character.changeHealth(-power);
  }
  heal(character, power) {
    character.changeHealth(power);
    return `${this.name} healed ${character.name} for ${power} HP!`;
  }
  changeHealth(points) {
    this.healthPoints += points;
    if (this.healthPoints <= 0) {
      console.log(`${this.name} has died!`);
      return this.destroy();
    }
    return `${this.name} now has ${this.healthPoints} health points.`;
  }
  getHealth() {
    return this.healthPoints;
  }
}


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
}

class Villain extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
}

// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const baddie = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 100,
  name: 'Billy',
  team: 'Evil Legion',
  weapons: [
    'Dark Magic'
  ],
  language: 'Abyssal',
});

const goodguy = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 100,
  name: 'Bruce Willis',
  team: 'People of Justice',
  weapons: [
    'Magic Sword'
  ],
  language: 'Common Tongue',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(baddie.attack(goodguy, 40));
console.log(baddie.attack(goodguy, 45));
console.log(mage.heal(goodguy, 100));
console.log(goodguy.attack(baddie, 9999));