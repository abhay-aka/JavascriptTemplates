const test = {
    name: "abhay",
    lastName: "k",
    location: {
        city: {
            pin: "123",
            state: "up"
        }
        
    }
}
const shallowCopy = {...test};
// shallowCopy.location.city.state = "karnataka";


// const deepCopy = function(temp) {
//     if ( temp === null || typeof temp !== Object) return temp;

//     const newObj = {};
//     for ( key in temp) {
//         if (temp.hasOwnProperty(key)) {
//             newObj[key] = deepCopy(temp[key])
//         }
//     }
//     return newObj;
// }
const deepCopy = function(temp) {
    if (temp === null || typeof temp !== "object") return temp;

    const newObj = Array.isArray(temp) ? [] : {}; // Handle arrays and objects
    for (const key in temp) {
        if (temp.hasOwnProperty(key)) {
            newObj[key] = deepCopy(temp[key]);
        }
    }
    return newObj;
};
const dc = deepCopy(test);
dc.location.city.state = "Bihar";
console.log(test);
console.log(dc);