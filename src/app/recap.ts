const username: number | string = 'chano';

const suma = (numero1: number, numero2: number) => {
  return numero1 + numero2;
}

suma(1,123456);

class Person {
  age:number;
  lastName: string;

  constructor(age: number, lastName:string){
    this.age = age;
    this.lastName = lastName;
  }
}

class Car {

  constructor(public dors:number, public brand:string){
  }
}

const chano = new Person(23, 'Gutierrez');
chano.age;
