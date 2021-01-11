

// // function newFunction() {
// //     let num = 123;
// //     let temp = num.toString().split('').reverse().join('');
// //     return console.log(temp);
// // }
// // newFunction();
// // function replecated(str, num) {
// //     for (let counter = 0; counter <= num; counter++){
// //         return console.log(str.repeat(num));
// //     }
// // }

// // replecated('abc', 4);

// // function gigem(str, times) {
// //     let newstring = '';
// //     for (let counter = 0; counter <= times;counter++) {
// //         newstring += str;
// //     }
// //     return console.log(newstring);
// //     }
// // gigem('abc', 4);
    
// // function isEven(num) {
// //     if (num < 1) {
// //         return console.log('Invalid');
// //     }

// //     if (num % 2 === 0) {
// //         return true;
// //     }
// //     else {
// //         return false;
// //     }
// // }
// // console.log(isEven(6));


// // function totalCost(l, w, n) {
// //     let totalarea;
// //     let cost=0
// //     for (let i = 0; i <= n; i++){
// //         totalarea = n * l * w;
// //         cost = totalarea * 35;
        
// //     }
// //     return cost;
// // }
// // console.log(totalCost(1, 1, 1));

// function reverseNum(num) {
  
//     let newNum = '';
//     num = num.toString().split('');
//     for (let i = num.length - 1; i >= 0; i--) {
//         newNum += num[i];
//     }
//     return console.log(parseFloat((newNum)));

// }
// reverseNum(234);



// const onlyEven = (arr) => {
//     let newarr = [];
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newarr.push(arr[i]);
//             ;

//         }
//     }
//         return console.log(newarr);
//     }

// onlyEven([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// function sum(num) {
//     let sum = 0;
//     while (num !=0) {
//         sum += num;
//         num--;
//     }
//     return console.log(sum);
// }
// sum(5);
function nonZeros(arr){
    let newarray = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i]!=0) newarray.push(arr[i])
    }
    return console.log(newarray);
}
nonZeros([1, 000, 5, 0, 9]);

function doubled(arr) {
    let newarray2 = [];
    for (let i = 0; i <arr.length; i++){
        newarray2.push(2*arr[i]);
    }
    return newarray2;
}
console.log(doubled([1,3,4]));

function checkNumber(arr, n) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === n) {
            return true;
        }
        else return false; 
    }

}
console.log(checkNumber([1, 2, 3, 4], 5));

const volume=(h, r)=>{
    let v;
    v = (22 / 7) * r * r* h;
    return v;
}
volume(3, 4);
console.log(volume(3, 7));

/*Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
*/
const addValues = (arr, val){
    let newarr = [];
    newarr = arr.push(val);
    return newarr;

}
console.log(addValues([1,3],'come'));