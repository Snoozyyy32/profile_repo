/* Variables in javascript:
undefined,boolean, null,string ,symbol'objact.*/
/* undefined- something that has not been defined
null- something that has been set to nothing(empty value)
variable-a lable wich points to data
boolean-a true or fals
object-stors many key value pairs*/

/* There are 3 ways to makevariables in js,by using:
1.var- lets you createmutable variables wich can be used throughout code
2.let-lets you create a variable wich is used only in the section of code it is made
3.const-creates an imutable variable */

var myname = "Droo";
let ourname = "Max";
const youare = "Shoun";

/*Medlibs Game (intro to js functoins)*/
function specialWords(noun, adjective, verb){
    var result= " "
    result += "The " + noun +" "+ adjective + " " + verb +"from me.";
    return result
}

console.log(specialWords(frog, quickly, fled));