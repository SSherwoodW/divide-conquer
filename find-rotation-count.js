/**
 * accepts an array of distinct numbers sorted in increasing order.
 * The array has been rotated counter-clockwise n number of times.
 *
 * Given such an array, find the value of n.
 *
 * findRotationCount([15, 18, 2, 3, 6, 12]) // 2
 * findRotationCount([7, 9, 11, 12, 5]) // 4
 * findRotationCount([7, 9, 11, 12, 15]) // 0
 */

function findRotationCount(arr, low = 0, high = arr.length - 1) {
    console.log("high:", high);
    console.log("low:", low);
    if (high < low) return 0;
    if (high === low) {
        console.log("low:", low);
        return low;
    }
    let mid = Math.floor((high + low) / 2);
    console.log("mid:", mid);

    if (mid < high && arr[mid + 1] < arr[mid]) {
        console.log("mid + 1:", mid + 1);
        return mid + 1;
    }
    if (mid > low && arr[mid] < arr[mid - 1]) {
        console.log("mid:", mid);
        return mid;
    }

    if (arr[high] > arr[mid]) {
        return findRotationCount(arr, low, mid - 1);
    }

    return findRotationCount(arr, mid + 1, high);
}

findRotationCount([7, 9, 11, 12, 5]);

module.exports = findRotationCount;
