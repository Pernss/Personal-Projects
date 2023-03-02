const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordGenerator = document.getElementById("password-generate");
let passwordTextOne = document.getElementById("password-one");
let passwordTextTwo = document.getElementById("password-two");

passwordGenerator.addEventListener("click", function() {
    
    // loop in the characters array and pick a random character 
    // length of the password should be 15

    let passwordOne = "";
    let passwordTwo = "";

    for(let i = Math.floor(Math.random() * characters.length - 1); i < characters.length; i++) {
        
        if(passwordOne.length === 15) {
            break;
        } else {
            passwordOne += characters[i];
        }
        i = Math.floor(Math.random() * characters.length - 1);
    }

    for(let i = Math.floor(Math.random() * characters.length - 1); i < characters.length; i++) {

        if(passwordTwo.length === 15) {
            break;
        } else {
            passwordTwo += characters[i];
        }
        i = Math.floor(Math.random() * characters.length - 1);
    }

    passwordTextOne.textContent = passwordOne;
    passwordTextTwo.textContent = passwordTwo;
})


