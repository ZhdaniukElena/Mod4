let arr = [];


function addKeyboardLayout(alphabet) {
    arr.push(alphabet);
    return arr;
};
addKeyboardLayout('qwertyuiop[]');
addKeyboardLayout('asdfghjkl;\'');
addKeyboardLayout('zxcvbnm,./');

function getRandCharInRow(row) {
    let min = 0;
    let max = arr[row].length;
    let i = Math.floor(Math.random() * (max - min)) + min;
    return arr[row][i];
};
console.log(getRandCharInRow(0));

function getRandCharInAlph() {
    let arrDublicated = arr.slice();
    let arrReduced = arrDublicated.reduce( (memo, v)  => {
        return memo + v;
    }, "");
    let min = 0;
    let max = arrReduced.length;
    let i = Math.floor(Math.random() * (max - min)) + min;
    return arrReduced[i];
};
console.log(getRandCharInAlph());
