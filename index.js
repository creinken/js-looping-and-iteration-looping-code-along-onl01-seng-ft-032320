// Code your solutions in this file
function writeCards(array, string) {
    let returnArray = [];
    for (var i = 0; i < array.length; i++) {
        returnArray[i] = `Thank you, ${array[i]}, for the wonderful ${string} gift!`;
    }

    return returnArray;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer -= 1;
    }
}
