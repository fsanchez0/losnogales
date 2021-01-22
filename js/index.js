let name = 'Fernando';
let age = 22;

obj = { name, age};

console.log(obj);

const names = [
    {name: 'Fernando', edad: 22},
    {name: 'Leomardo', edad: 20}
]
/* Arrow Functions */
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, edad) =>{

}

const listOfNames4 = name =>{

}

const square = num => num * num;

const holaPromesa = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey');
        }else{
            reject('Ups!');
        }
    })
}

holaPromesa()
.then(Response => console.log(Response))
.then(() => console.log('Hola'))
.catch(error => console.log(error));

class calculadora {
    //constructor
    constructor(){
        this.valorA = 0;
        this.valorB = 0;
    }
    //métodos
    sum(valorA, valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;
    }
    resta(valorA, valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA - this.valorB;
    }
}

const calc = new calculadora;
console.log(calc.resta(2,2));

/*import hello from './madulo.mjs';

hello();*/

function* holaMundo(){
    if(true){
        yield 'Hola, ';
    }
    if(true){
        yield 'Mundo!';
    }
};

const generatorHola = holaMundo();
console.log(generatorHola.next().value);
console.log(generatorHola.next().value);
console.log(generatorHola.next().value);