// 'use strict'

const user = {
    firstName: '',
    lastName: '',
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }


function getFullName (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this);
    return this.fullName();
}


const bind = (funcArg, thisArg, ...args) => {
    return function(...params) {
        const uuid = Date.now().toString(); // создаю уникальный ключ для свойства контектса. 
        thisArg[uuid] = funcArg;
        const res = thisArg[uuid](...params,...args);
        delete thisArg[uuid];
        return res;
    }
}



const forExample = bind(getFullName, user);
console.log(forExample(`Антон`, `Антон`));

 