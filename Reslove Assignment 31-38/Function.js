//<<Q:1>>
// function currentDate(){
//     var now =new Date();
// document.write(now);
// }
// currentDate();

//<<Q:2>>
//     function cusName(fName,lName){
//         var fullname = fName + lName

//         return fullname;
//         }
// var n=cusName("Qamar","Aziz");
// alert("Your FullName is : "+n);

//<<Q:3>>
// function add(user1,user2){
//      user1=+prompt("Enter 1st number to add");
//      user2=+prompt("Enter 2nd number to add");
//        var sum= user1 + user2;
//         return sum;
//     }
//     var n=add();
//     document.write("Sum Of Two Numbers : "+n);

//<<Q:4>>
// function calculator(num1,num2,oprt){
//     num1=+prompt("Enter 1st number ");
//     oprt =prompt("Enter Only that's Operator(+,*,-,/)..");
//     num2=+prompt("Enter 2nd number ");
//       let result;
//       if (oprt=='+'){
//           result=num1+num2;
//       }
//       else if (oprt==='-') {
//           result=num1-num2;
//       }
//       else if(oprt==='*'){
//             result=num1* num2;
//       }
//       else if(oprt==='/'){
//             result=num1/num2;
//       }
//       else{
//           alert("Sorry you not use that operator..");
//       }
//       return result;

//     }
//     var rslt = calculator();
//     alert("Here result is : "+ rslt);

//<<Q:5>>
// function square(num){
// let sqr=num*num;
// return sqr;
// }
// var s=square(5);
// alert(s);

///<<Q:6>>
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = prompt("Enter a number ...!!");
//   a = factorial(n)
//   alert("The factorial of " + n + " is " + a);


//<<Q:10>>

// function checkPalindrome(str) {

//     const arrayValues = string.split('');
//     const reverseArrayValues = arrayValues.reverse();
//     const reverseString = reverseArrayValues.join('');

//     if(string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }
// const string = prompt('Enter a string: ');
// checkPalindrome(string);


///<<Q:8>>
// function findHypotenuse(base, prep)
//     {  
//         function square (hypotenous)
//         {
//             hypotenous= h*h;
//                 document.write("Square of hypotenous is : "+hypotenous);
            
//         }

//         let h = (((base * base) + (prep * prep))**(1/2));
        
//         square(h);
//     }
//     findHypotenuse(4,3);
          

    
    
///<<Q:9>>
//         function areaOfRectangle(Height,width){
//             let  area = Height * width
//         return area;
//         }
// let rectangle=areaOfRectangle(12,23);
// alert(rectangle);


///<<Q:11>>
// function chngeToUpper(word){
//        let chng = word.toUpperCase();
//     return chng;
// }
// let cToUp=chngeToUpper("the quick brown fox.");
//         document.write("UPPER CASE : "+cToUp);

//<<Q:12>>
// function findLongest(word){
//     var wordSplit=word.split(" ");
//         var longestWord= 0;
//         for(var i=0; i<wordSplit.length; i++){

//             if(wordSplit[i].length>longestWord){

//                 longestWord =wordSplit[i].length;
//             }
//         }
        
//  return longestWord;
// }
// let long = findLongest("Web Development Tutorial");
//      document.write("Longest word  : "+ long);

