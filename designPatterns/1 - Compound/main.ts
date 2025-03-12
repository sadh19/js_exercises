import { Dog } from "./classes/Dog";
import { Lion } from "./classes/Lion";
import { Person } from "./classes/Person";

export class Main {
  public static main() {
    const person = new Person();
    const dog = new Dog();
    const lion = new Lion();
    person.display();
    dog.display();
    lion.display();
  }
}

Main.main();
