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

topSalary(salaries)