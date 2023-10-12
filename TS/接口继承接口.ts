interface Animal {
    age: number
    sayHello(): void
}
interface Person extends Animal {
    // Person接口继承了Animal，就拥有了Animal种所有的属性和方法
    name: string
}

class Person implements Person {
    age: number
    constructor({ age }: { age: number }) {
        this.age = age;
    }
    sayHello() {
        console.log(this.age);
    }
}

const p = new Person({ age: 123 });


console.log('----------->1', p.sayHello());