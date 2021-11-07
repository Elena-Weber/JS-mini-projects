let arr1 = [1,3,5,7]
let arr2 = [1,2,3,7]
let merged = arr1.concat(arr2).sort() // [1,3,5,7,1,2,3,7] => [1,1,2,3,3,5,7,7]
let result = []

for (let i = 0; i < merged.length; i++) {
    for (let j = 1; j < merged.length; j++) {
        if (merged[i] !== merged[j]) {
            result.push(merged[j])
        }
    }
}

// find unique elements in these 2 arrays

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] !== arr2[j]) {
//             result.push(arr2[i])
//         }
//     }
// }

