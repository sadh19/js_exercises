import { Bark } from "../interfaces/Bark";
import { Animal } from "./Animal";

export class Dog extends Animal {
  sound = new Bark();

  display(): void {
    console.log("Im a dog!!");
    this.sound.makeSound();
  }
}
