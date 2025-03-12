import { DisplaySound } from "./DisplaySound";

export class Bark implements DisplaySound {
  makeSound(): void {
    console.log("Guau, guau!!");
  }
}
