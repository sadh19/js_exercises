import { Roar } from "../interfaces/Roar";
import { Animal } from "./Animal";

export class Lion extends Animal {
  sound = new Roar();

  display(): void {
    console.log("Im a lion!!");
    this.sound.makeSound();
  }
}
