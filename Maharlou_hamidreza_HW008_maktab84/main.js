const user = {};

function generator(key) {
    return function (val) {
        this[key] = val;
        return this
    }
}


const nameSetter = generator("name").bind(user)
const ageSetter = generator("age").bind(user)
nameSetter("jack");
console.log(ageSetter(21));

//--------------------------------q2----------------------------
// create func that get elem and callback and make it
function elemCreator(elem,func) {
    const body = document.querySelector("body")
    //create the element
    const createElem = document.createElement(`${elem}`);
    //add text to it
    createElem.innerText="salam"
    //append it
    body.append(createElem)
    //call callback and pass the elem to it
    func(createElem)
}
function changeBackgroundColorToRed(elem) {
    elem.style.background="red"
}
elemCreator("p",changeBackgroundColorToRed)
elemCreator("span",changeBackgroundColorToRed)


