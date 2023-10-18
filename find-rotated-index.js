/**
 * accepts a rotated array of sorted numbers and an integer.
 * return the index of num in the array.
 * If the value is not found, return -1.
 *
 * findRotatedIndex([3,4,1,2],4) // 1
 * findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
 * findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
 * findRotatedIndex([37,44,66,102,10,22],14) // -1
 * findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
 */

function findRotatedIndex(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        if (arr[low] <= arr[mid]) {
            if (arr[low] <= num && num <= arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (arr[mid] < num && num <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid + 1;
            }
        }
    }
    return -1;
}

findRotatedIndex([3, 4, 1, 2], 4);

module.exports = findRotatedIndex;
