import { DisplaySound } from "./DisplaySound";

export class Talk implements DisplaySound {
  makeSound(): void {
    console.log("Bla, bla, bla");
  }
}
