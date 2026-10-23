// ==========================================
// 1: CLASE PADRE Y CÍRCULO
// ==========================================
console.log("Js funcionando")

class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

class Circulo extends Figura {
  #radio

  constructor(nombre, radio) {
    super(nombre)
    this.#radio = radio
  }

  calcularArea() {
    return 3.1416 * this.#radio * this.#radio
  }

  calcularPerimetro() {
    return 2 * 3.1416 * this.#radio
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  #base 
  #altura
  #lado1
  #lado2
  #lado3
  #lado4
  constructor(nombre,base,altura,lado1,lado2,lado3,lado4) {
    super(nombre)
    this.#base = base
    this.#altura = altura
    this.#lado1 = lado1
    this.#lado2 = lado2
    this.#lado3 = lado3
    this.#lado4 = lado4
    
  }

  calcularArea() {
    return this.#base * this.#altura
  }

  calcularPerimetro() {
    return this.#lado1 + this.#lado2 + this.#lado3 + this.#lado4
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
  #base
  #altura
  #lado1
  #lado2
  #lado3
  constructor(nombre,base,altura,lado1,lado2,lado3) {
  super(nombre)
  this.#base = base 
  this.#altura = altura
  this.#lado1 = lado1
  this.#lado2 = lado2
  this.#lado3 = lado3

  }

  calcularArea() {
    return (this.#base * this.#altura ) / 2 
  }

  calcularPerimetro() {
    return this.#lado1 + this.#lado2 + this.#lado3
  }
}

// ==========================================
// 4: ZONA DE PRUEBAS
// ==========================================


const circle1 = new Circulo("Cicurlo1", 5)
console.log(circle1.calcularArea(),circle1.calcularPerimetro())


const rectangle1 = new Rectangulo("Rectangulo1", 5, 10,4,6,7,2)
console.log(rectangle1.calcularArea(),rectangle1.calcularPerimetro())


const triangle1 = new TrianguloRectangulo ("Triangulo1",5,10,6,4,8)
console.log(triangle1.calcularArea(),triangle1.calcularPerimetro())