import WarriorPortrait from '../portraits/classes/Warrior.png';
import RoguePortrait from '../portraits/classes/Rogue.png';
import MagePortrait from '../portraits/classes/Mage.png';
import HunterPortrait from '../portraits/classes/Hunter.png';

export const Warrior = (character) =>{ //defense skills
    character.maxHealth = 200;
    character.maxMana = 70;
    character.strength = 100;  
    character.agility = 70
    character.speed = 50;
    character.defense = 150;
    character.class = 'Warrior';
    character.portrait = WarriorPortrait;
}

export const Rogue = (character) => { //furtivity + blood stack
    character.maxHealth = 100;
    character.maxMana = 100;
    character.strength = 100;
    character.agility = 200;
    character.speed = 150;
    character.defense = 100;
    character.class = 'Rogue';
    character.portrait = RoguePortrait
}

export const Mage = (character) => { //elemental stack skills
    character.maxHealth = 100;
    character.maxMana = 200;
    character.strength = 50;
    character.agility = 200;
    character.speed = 80;
    character.defense = 70;
    character.class = 'Mage';
    character.portrait = MagePortrait
}

export const Hunter = (character) => { //trap skills
    character.maxHealth = 150;
    character.maxMana = 50;
    character.strength = 50;
    character.agility = 150;
    character.speed = 200;
    character.defense = 100;
    character.class = 'Hunter';
    character.portrait = HunterPortrait
}