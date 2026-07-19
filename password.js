const password=document.getElementById("password");
const lengthvalue=document.getElementById("lengthvalue");
const length=document.getElementById("length");

const upper=document.getElementById("uppercase");
const lower=document.getElementById("lowercase");
const numbers=document.getElementById("numbers");
const symbels=document.getElementById("symbel");

const generate = document.getElementById("generate");
const copy=document.getElementById("copy");
const display=document.getElementById("passed");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?/";

length.oninput=function(){
    lengthvalue.textContent=length.value;
    
};
generate.onclick=function(){
    let characters="";
    if(upper.checked)characters+=upperChars;
    if(lower.checked)characters+=lowerChars;
    if(numbers.checked)characters+=numberChars;
    if(symbels.checked)characters+=symbolChars;

if(characters===""){
    alert("select atleast one");
    return;
}
let pass="";
for(let i=0;i<length.value;i++){
    let random=Math.floor(Math.random()*characters.length);
    pass+=characters[random];
}
password.value=pass;

}
copy.onclick=function(){
    if(password.value===""){
        display.textContent=" ❌ Generate Password first"
    }
    else{
        navigator.clipboard.writeText(password.value);
        display.textContent="✅ Password Copied!";

    }
}

