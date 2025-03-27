import { Talk } from "../interfaces/Talk";
import { Animal } from "./Animal";

export class Person extends Animal {
  sound = new Talk();

  display(): void {
    console.log("Im a person!!");
    this.sound.makeSound();
  }
}
