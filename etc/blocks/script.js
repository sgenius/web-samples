class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let myCar = new Vehicle('Toyota', 'Corolla', 2020);
console.log(myCar);

// Extended class: it inherits make, model, and year from Vehicle
class Motorcycle extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year); // calls Vehicle constructor
        this.hasSidecar = hasSidecar;
    }
}

let myMotorcycle = new Motorcycle('Harley-Davidson', 'Street 750', 2019, false);
console.log(myMotorcycle);