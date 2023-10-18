function countZeroes(arr) {
    let startIdx = 0;
    let endIdx = arr.length - 1;

    while (startIdx <= endIdx) {
        const middleIdx = Math.floor((startIdx + endIdx) / 2);

        if (arr[middleIdx] === 1) {
            // Move to the right half of the array.
            startIdx = middleIdx + 1;
        } else if (arr[middleIdx] === 0) {
            // Check the element before middleIdx.
            if (middleIdx === 0 || arr[middleIdx - 1] === 1) {
                // The transition point is found.
                return arr.length - middleIdx;
            } else {
                // Move to the left half of the array.
                endIdx = middleIdx - 1;
            }
        }
    }
    // If no transition point is found, return 0 (no zeroes in the array).
    return 0;
}

countZeroes([1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]);

module.exports = countZeroes;

// if (arr[0] === 0) {
//     return arr.length;
// }

// let startIdx = 0;
// let endIdx = arr.length - 1;
// let middleIdx = Math.floor(endIdx / 2);

// {
//     if (arr[middleIdx] === 0) {
//         endIdx = middleIdx - 1;
//         if (arr[endIdx] === 1) {
//             console.log(
//                 `first return statement: ${arr.length - 1 - endIdx}`
//             );
//             return arr.length - 1 - endIdx;
//         } else {
//             //else if arr[newEndIdx] === 0 still...
//             middleIdx = Math.floor(endIdx / 2);
//             if (arr[middleIdx] === 0) {
//                 endIdx = middleIdx - 1;
//                 if (arr[endIdx] === 1) {
//                     console.log(
//                         `second return statement: ${
//                             arr.length - 1 - endIdx
//                         }`
//                     );
//                     return arr.length - 1 - endIdx;
//                 }
//             } else if (arr[middleIdx] === 1) {
//                 console.log(
//                     `third return statement: ${arr.length - endIdx}`
//                 );
//                 return arr.length - endIdx;
//             }
//         }
//     } else if (arr[middleIdx] === 1) {
//         startIdx = middleIdx + 1;
//         if (arr[startIdx] === 0) {
//             console.log(`fourth return statement: ${middleIdx}`);
//             return middleIdx;
//         } else if (arr[startIdx] === 1) {
//             middleIdx = Math.floor((startIdx + endIdx) / 2);
//             console.log(`middleindex at 2nd elseif: ${middleIdx}`);
//             if (arr[middleIdx] === 1) {
//                 startIdx = middleIdx + 1;
//                 if (arr[startIdx] === 0) {
//                     console.log(`fifth return statement: ${middleIdx}`);
//                     return middleIdx;
//                 } else if (arr[startIdx] === 1) {
//                     middleIdx = Math.floor((startIdx + endIdx) / 2);
//                     if (arr[middleIdx] === 1) {
//                         startIdx = middleIdx + 1;
//                         if (arr[startIdx] === 0) {
//                             console.log(
//                                 `fifth return statement: ${middleIdx}`
//                             );
//                             return middleIdx;
//                         } else {
//                             return -1;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// return -1;
