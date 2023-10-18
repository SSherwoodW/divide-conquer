/**
 * Given a sorted array and a number, write a function called sortedFrequency that 
 * counts the occurrences of the number in the array

 * sortedFrequency([1,1,2,2,2,2,3],2) // 4
 * sortedFrequency([1,1,2,2,2,2,3],3) // 1
 * sortedFrequency([1,1,2,2,2,2,3],1) // 2
 * sortedFrequency([1,1,2,2,2,2,3],4) // -1
 */

function sortedFrequency(arr, num) {
    const firstIndex = findFirstOccurrence(arr, num);
    const lastIndex = findLastOccurrence(arr, num);

    if (firstIndex === -1) {
        return -1;
    }
    return lastIndex - firstIndex + 1;
}

function findFirstOccurrence(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let firstIndex = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === num) {
            firstIndex = mid;
            high = mid - 1;
        } else if (arr[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return firstIndex;
}

function findLastOccurrence(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let lastIndex = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === num) {
            lastIndex = mid;
            low = mid + 1;
        } else if (arr[mid] > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return lastIndex;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2);

module.exports = sortedFrequency;
