person = {
    nume:'Gabriela Boboc',
    varsta:20,
    cal: ['simpatica','sincera','iubitoare de animale']
}

console.log(person.nume);
console.log(person.varsta);
console.log('Calitati');
console.log(person.cal[0]);
console.log(person.cal[1]);
console.log(person.cal[2]);

person2= {
    nume : person.nume,
    varsta: person.varsta,
    cal: person.cal
}


person2.nume='Gabriela Marin';
console.log(person2.nume);
console.log(person2.varsta);
console.log(person2.cal[0]);
//console.log(person2.cal[1]);
//console.log(person2.cal[2]);
