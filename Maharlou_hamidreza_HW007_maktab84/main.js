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
    const concat=[]
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
    arr.forEach(item=>{
        // convert str to lowercase then split and sort it to get the roots of words.
        const sorted = item.toLowerCase().split("").sort().join("");
        // add it to obj
        obj[sorted] = item;
    })

    return Object.values(obj);
}

console.log(aClean(arr))