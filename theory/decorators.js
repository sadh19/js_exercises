function logger(value, context) {
  console.log("Decorator called");
}

@logger
class Persona {}
