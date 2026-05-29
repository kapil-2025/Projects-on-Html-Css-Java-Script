const btn=document.querySelector(".btn")
const inputEl=document.getElementById("input");
const copyIconEl=document.querySelector(".fa-copy");
const alertContainerEl=document.querySelector(".alert-container");
btn.addEventListener('click',()=>{
  createPassword();
})
copyIconEl.addEventListener('click',()=>{
  copyPassword();
  alertContainerEl.innerText=inputEl.value + " copied ";
  alertContainerEl.classList.add("active");
  setTimeout(()=>{
alertContainerEl.classList.remove("active");
  },2000);

  
})
function createPassword(){
  const chars="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()_+-=[]{}|;:'?)(^<>/";
 const passwordLength=14;
 let password="";
 for(let i=0; i<passwordLength; i++){

const randomNum=Math.floor(Math.random()*chars.length)

 password+=chars.substring(randomNum,randomNum+1);

  }
  inputEl.value=password;
  
 


}
function copyPassword(){
inputEl.select();
inputEl.setSelectionRange(0,9999);
navigator.clipboard.writeText(inputEl.value);



}
