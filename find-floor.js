/**
 * accepts a sorted array and a value x.
 * returns the floor of x in the array.
 * * * * floor of x :  largest element in the array which is
 * * * * * * * * * * * smaller than or equal to x.
 *
 * if floor does not exist, return -1.
 *
 * Examples:
 * findFloor([1,2,8,10,10,12,19], 9) // 8
 * findFloor([1,2,8,10,10,12,19], 20) // 19
 * findFloor([1,2,8,10,10,12,19], 0) // -1
 */
function findFloor(arr, x, low = 0, high = arr.length - 1) {
    console.log("high:", high);
    console.log("low:", low);
    if (x < arr[low]) return -1;
    if (x > arr[high]) return arr[high];

    let mid = Math.floor((low + high) / 2);
    console.log("mid:", mid);
    if (arr[mid] === x) return arr[mid];

    if (arr[high] > x && arr[mid] <= x && high - 1 === mid) {
        return arr[mid];
    }

    if (arr[mid] > x) {
        return findFloor(arr, x, low, mid - 1);
    }
}

module.exports = findFloor;
