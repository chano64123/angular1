import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  register = {
    name:'',
    email:'',
    password: ''
  }
  box = {
    width:100,
    height:100,
    background:'red'
  };
  widthImg:Number = 50;
  maxHeight = 120;
  name = 'Chano';
  age = 23;
  img = 'https://source.unsplash.com/random';
  isBtnDisabled = true;
  person = {
    name: 'Jose',
    age: 18,
    avatar: 'https://source.unsplash.com/random',
  }
  names:string[] = [
    'Chano', 'Jose', 'Roberto', 'Marco'
  ]
  newName:string = '';

  products:Product[] = [
    {
      name: 'Album del Mundial',
      price: 220,
      image: './assets/images/products/album-mundial.png',
      category: 'Colecciones'
    },
    {
      name: 'Bicicleta Usper Montañera',
      price: 750,
      image: './assets/images/products/bicicleta.png'
    },
    {
      name: 'Carro de Mentirita',
      price: 100000,
      image: './assets/images/products/carro.png'
    },
    {
      name: 'Cubo Magico 3x3',
      price: 30,
      image: './assets/images/products/cubo-rubik.png'
    },
    {
      name: 'Libros de Mentiritas',
      price: 50,
      image: './assets/images/products/libros.png'
    },
  ];

  toggleButton(){
    this.isBtnDisabled = !this.isBtnDisabled;
    console.log(this.isBtnDisabled)
  }

  increaseAge(){
    this.person.age +=  1;
    console.log(this.person.age)
  }

  decreaseAge(){
    this.person.age -=  1;
    console.log(this.person.age)
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(){
    this.names.pop();
  }

  deleteNameByIndex(index: number){
    this.names.splice(index,1);
  }

  onRegister(){
    console.log(this.register)
  }
}
