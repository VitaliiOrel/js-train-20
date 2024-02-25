function Vehicle(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  
    this.toString = function() {
        return `${this.brand} ${this.model} ${this.year}`;
    };
  
    this.valueOf = function() {
        return this.mileage;
    };
}

console.log('test');
const auto = new Vehicle('skoda', 'babel', 2024, 1);
console.log(auto);
console.log('string ', auto.toString());
console.log('valueOf ', auto.valueOf());
console.log('model ', auto.model);
console.log('proto ', auto.__proto__);
console.log(Object.getPrototypeOf(auto));

