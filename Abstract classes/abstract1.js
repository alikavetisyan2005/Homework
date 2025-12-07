class Shape{
    constructor(color){
        if(new.target === Shape){
            throw new Error("Abstract class can not have an instance");
        }
        this.color = color;
    }
    area(){
        throw new Error("area() is an abstract method");
    }
    perimeter(){
        throw new Error("perimeter is an abstract method");
    }
    describe(){
        console.log(`Shape type: ${this.constructor.name}, area: ${this.area()}, perimeter: ${this.perimeter()}`)
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI * (this.radius ** 2);
    }
    perimeter(){
        return 2 * Math.PI * this.radius;
    }

}
class Rectangle extends Shape{
    constructor(width,heigth){
        super();
        this.width = width;
        this.heigth = heigth;
    }
    area(){
        return this.heigth * this.width;
    }
    perimeter(){
        return (2 * this.heigth) + (2 * this.width);
    }

}
class Triangle extends Shape{
    constructor(a,b,c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    perimeter(){
        return this.a + this.b + this.c;
    }
    area(){
        let s = this.a + this.b +  this.c;
        return Math.sqrt(s * (s - this.a)*(s - this.b)*(s - this.c));
    }
}

const circle = new Circle(1);
const rec = new Rectangle(2,4);
const triangle = new Triangle(1,2,3);
rec.describe();
circle.describe();
triangle.describe();


