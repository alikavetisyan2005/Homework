class Rectangle{
    constructor(width,heigth){
        this.width = width;
        this.heigth = heigth;

    }


getArea(){ 
    return this.width * this.heigth;
}
getPerimeter(){ 
return (this.width + this.heigth) * 2;
}
}
const rect = new Rectangle(2,5);
console.log(rect.width);
console.log(rect.heigth);
console.log(rect.getArea());
console.log(rect.getPerimeter())

