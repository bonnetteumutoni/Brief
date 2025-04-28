//Extract the last four characters 
let text = "extravaganza";
let result= text.slice(8,12);
console.log(result);

//Inserting the string at the fourth index
const food = "The quick fox jumped over the lazy dog";
let str2="eat";
let indx= 4;
let res = food.slice(0, indx) + str2 +" "+ food.slice(indx);
console.log(res);

//Counting how many times string appears
const story= "The quick brown fox jumps over the lazy dog";
let word1="the";
let word2="brown";
const count = story.split(word1).length - 1;
console.log(count);
const count1 = story.split(word2).length - 1;
console.log(count1);

//finding words from the strings
const string1 = "The pupils are reading in the library";
let position=string1.search("are");
console.log(position);
const string2 = "The child was sitting on the table before it fell";
let position1=string1.search("sitting");
console.log(position);


//Converting the strings into the specified format:
let copy="wonderful";
let word="amazing";
let num="UndERneath";
console.log(copy.toUpperCase());
console.log(word.toLowerCase());
console.log(num.toLowerCase());
let title= "A wonderful world";
let newTitle = title.toLowerCase();
let splitted = newTitle.split(" ");
splitted.forEach((word, index)=>{
    splitted[index] = word.charAt(0).toUpperCase() + word.slice(1)
})
console.log(splitted.join(" "));