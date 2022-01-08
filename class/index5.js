// 1.class with movie type
class movie {
    constructor( title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const bestMovie = new movie ( "charlie","vigneshstudios","PG15");
console.log(bestMovie);

// class with second task
class circle {
    constructor (radius,color){
        this.radius = radius;
        this.color = color;

    }
}
const result = new circle (1, "red color");
console.log(result);

// class with given related movie
class movie2 {
    constructor( title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const oneMovie = new movie2 ( "Casino Royale","Eon Production","PG13");
console.log(oneMovie);

// class with person related
class person {

    constructor (name,age, gender,state,country){

        this.name = name;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.country = country;
    }
}

const details = new person ("vignesh","27", "male","tamilnadu","india");

console.log(details);

// class with get uber price
class uber {

    constructor (km, price){

        this.km = km;
        this.price = price;
    }

 get amount(){
    return this.calcAmount();
}

calcAmount (){
    return this.price * this.km;
}
}

const result2 = new uber (5,10);
console.log(result2.amount);



