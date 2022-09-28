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
// stepCounter.increase().increase().increase().decrease().read()

// ------------------------------------q3---------------------------------------
const myArray = [{name: "John", age: 45}, {name: "Sara", age: "20"}, {name: "Mike", age: 26}, {name: "Jonas", age: 14}]

// use + maybe the value of age is string😉
function sort(arr) {
    return arr.sort((a, b) => +a.age - +b.age);
}

console.log((sort(myArray)))

// -----------------------------------------q4--------------------------------------
//use obj destructing as input and set the default value
function showNotification({top = 100, right = 100, html = "Hello", className = "welcome"} = {}) {
    // select div with message class
    const message = document.querySelector(".message");
    //set style for position
    message.setAttribute("style", `top:${top}px ;right:${right}px`);
    //add class
    message.classList.add(`${className}`)
    // create paragraph and add text then append it to message
    const p = document.createElement("p");
    p.innerHTML = `${html}`;
    message.append(p);
}
showNotification()