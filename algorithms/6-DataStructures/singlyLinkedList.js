//? Es una estructura de datos que contiene cabeza,cola y una longitud. ? Consisten en nodos, y cada nodo tiene un valor y un puntero para otro nodo o es nulo (en caso de ser el último elemento)
//! No tienen índices, usa punteros para conectar los nodos, y no se permite el acceso aleatorio

//! Se crea una clase nodo para guardar el valor y el puntero next de cada elemento de la lista enlazada
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//* 1.- Se crea la clase lista enlazada, estableciendo su head, tail y length por defecto en el constructor
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //* En el push, se crea un nodo usando el valor, y dependiendo si la lista enlazada está vacía, se hace una validación para colocar el nuevo nodo
  push(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let prev = this.head;
      let current = this.head;

      while (current.next) {
        prev = current;
        current = current.next;
      }

      this.tail.value = prev.value;
      this.tail.next = null;
      this.length--;
      return current.value;
    }
  }
}

let list = new SinglyLinkedList();
list.push(1);

console.log(list);
console.log(list.pop());
console.log(list);
