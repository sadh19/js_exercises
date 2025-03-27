import { DisplaySound } from "./DisplaySound";

export class Roar implements DisplaySound {
  makeSound(): void {
    console.log("Roaaar!!!");
  }
}
