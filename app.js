
var title ;
var name = window.prompt("Enter your name: ");


var gender = window.prompt("Enter your gender");
Gender();


var age = window.prompt("Enter your age");
Age();

function skipMeassage(){
    var userAnswer = confirm("do you want to skip the welcoming message")
    console.log(userAnswer)
    if(userAnswer){
        console.log("skipped then contune")
    } else {
        welcomeMeassage(); 
    }
    
}
skipMeassage();


function welcomeMeassage() {
if(gender=="male"|| gender =="female"){
    alert("This is a welcoming message  "+this.name +"  "+ title)
}
else{
    alert("This is a welcoming message  undifend gender  "+this.name)
}
}



function Gender() {
    if (gender == 'male') {
        title="Mr";
    return alert("Hello Mr  "  + this.name);
    } else{
        title="Ms";
        alert("Hello Ms   " + this.name);
    }
    return title;
}

function Age() {
    if (age<=0){
       alert("Your enter age zero or less try again")
    }
}

var threeAnswer = [];
function moreQuestions(){

for (var index = 0; index < 3; index++) {
    
   if(index==0){
    threeAnswer.push(prompt("what color do you love ?"));
    if(threeAnswer[0]==""){
        alert("invalid")
    }
    
   }
   else if (index==1){
    threeAnswer.push(prompt("what car do you love ?"));
    if(threeAnswer[1]==""){
        alert("invalid")
    }
   }
   else {
    threeAnswer.push(prompt("what country do you love ?"));  
    if(threeAnswer[2]==""){
        alert("invalid")
    }
}
}
return threeAnswer;
}

moreQuestions();

console.log(threeAnswer)