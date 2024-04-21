// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0

//var arr = [1,2,3,4,5,6,7,8,9,0]
// var password = prompt("Enter your password ")
// for(var i = 0; i < arr.length;i++){
//     if(arr[i]==password.charAt(0)){
//         alert("Invalid passowrd;number in the beginning is not acceptable")
//         break
//     }
//     else if(password.length== 0){
//         alert("Enter your userName")
//         break

//     }
//     else if (password.length<6){
//         alert("Password is less than six pls retry")
//         break
//     }
//     else{
//         alert("Great! you have done the job")
//         break
//     }
// }

// Q.Write a program that takes two arrays of numbers as input and returns a new array containing only the
//  elements that are present in both arrays.
//  Use nested for loops to compare each element of the first array with each element of the second array

// var array1 = [1,2,3,"faiz",4,5]
// var array2 = [1,2,3,"faiz"]
// for(var i = 0; i < array1.length; i++){
//     for(a = 0; a < array2.length; a++){
//         if(array1[i]===array2[a]){
//             console.log(array1[i],array2[a])
//         }
//     }
// }

// Q. Write a program that takes an array of numbers as input. Double each even number in the array and remove all odd numbers. Return the modified array.

// var arr = [1,2,3,4,5,6,7]
// var emptyArray = []
// for(var i = 0; i < arr.length; i++){
//     if (arr[i]% 2=== 0){
//         emptyArray.push(arr[i]*2)
//     }
// }
//document.write (emptyArray)

//Q.Write a program that takes a nested array as input and flattens it into a single array. For example, if the input is [[1, 2], [3, 4], [5, 6]], the output should be [1, 2, 3, 4, 5, 6].
 var nestedArray = [[1, 2], [3, 4], [5, 6]]
 console.log(nestedArray.flat());
