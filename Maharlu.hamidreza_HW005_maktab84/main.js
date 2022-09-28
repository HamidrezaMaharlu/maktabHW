let user = {
    name: "John",
    age: 30,
    sayHello() {
        alert(`Hello ${this.name}`)
    },

};
// user.sayHello()


//--------------------------q2---------------------
// return this => for chaining the method
const stepCounter = {
    step: 0,
    increase() {
        ++this.step;
        return this;
    },
    decrease() {
        this.step >= 0 ? --this.step : "the step is zero";
        return this;
    },
    reset() {
        this.step = 0;
        return this;
    },
    read() {
        alert(this.step);
        return this;
    },

}

stepCounter.increase().increase().increase().decrease().read()
