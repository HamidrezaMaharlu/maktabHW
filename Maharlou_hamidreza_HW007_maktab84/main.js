let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

function topSalary(obj) {
    //get the value of object and find the max val
    const max = Math.max(...Object.values(obj));
    const result = [];
    //loop over entries and get key and value
    for (const [key, value] of Object.entries(obj)) {
        if (value === max) {
            result.push(key)
        }
    }
    console.log(...result)
}

// topSalary(salaries)

//--------------------------q1-2------------------------------------------
function sort(...args) {
    const concat = []
    args.forEach(item => concat.push(...item));
    concat.sort((a, b) => b - a);
    console.log(...concat)
}

// sort ( [5,6,2] , [3,7,1] , [2,4,8] )

//---------------------------q1-3-----------------------------------------
function unique(arr) {
    const set = new Set(arr);
    return [...set]
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
// alert(unique(values))

//---------------------------q1-4------------------------------------------
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aClean(arr) {
    let obj = {};
    //loop over array
    arr.forEach(item => {
        // convert str to lowercase then split and sort it to get the roots of words.
        const sorted = item.toLowerCase().split("").sort().join("");
        // add it to obj
        obj[sorted] = item;
    })

    return Object.values(obj);
}

// console.log(aClean(arr))

//---------------------------q1-5------------------------------------------
let map = new Map();
map.set("name", "John");
let keys = map.keys();

// Error: keys.push is not a function
// keys.push("more")

// solution
// 1. while "map.keys" doesn't return an array (although it can be iterated) we can't use array method on it.
// 2. if we need array of keys we can use spread operator to convert it to array
const arrOfKeys = [...keys]
arrOfKeys.push("more")
console.log(arrOfKeys)

//-------------------------index.html------------------------
function matchPassword() {
    const pw1 = document.getElementById("password");
    const pw2 = document.getElementById("re-password");
    const match = document.getElementById("match")
    const btn = document.getElementById("registerBtn")
    if (pw1.value !== pw2.value) {
        match.innerText = "❌"
        btn.disabled = true
    } else {
        match.innerText = "✔"
        btn.disabled = false
    }
}
function checkPassword() {
    const upper=document.getElementById("upper")
    const lower=document.getElementById("lower")
    const num=document.getElementById("num")
    const count=document.getElementById("count")
    const symbol=document.getElementById("symbol")
    const pw1 = document.getElementById("password");
    if (/^(?=.*[a-z]).{1,}$/.test(pw1.value)){
    lower.style.display="none"
    }
    if (!/^(?=.*[a-z]).{1,}$/.test(pw1.value)){
        lower.style.display=""
    }
    if (/^(?=.*[A-Z]).{1,}$/.test(pw1.value)){
    upper.style.display="none"
    }
    if (!/^(?=.*[A-Z]).{1,}$/.test(pw1.value)){
        upper.style.display=""
    }
    if (/^(?=.*[1-9]).{1,}$/.test(pw1.value)){
        num.style.display="none"
    }
    if (!/^(?=.*[1-9]).{1,}$/.test(pw1.value)){
        num.style.display=""
    }
    if (/^(?=.*[!@#$%^&*_=+-]).{1,}$/.test(pw1.value)){
        symbol.style.display="none"
    }
    if (!/^(?=.*[!@#$%^&*_=+-]).{1,}$/.test(pw1.value)){
        symbol.style.display=""
    }
    if (pw1.value.length>7 && pw1.value.length<13){
        count.style.display="none"
    }
    if (pw1.value.length<8 || pw1.value.length>12){
        count.style.display=""
    }
}
