const btn=document.getElementById("btn");
const animeContainer=document.querySelector(".anime-container");
const animeImg=document.querySelector(".anime-img");
const animeName=document.querySelector(".anime-name");
btn.addEventListener("click",async function(){
  try {
    const response= await fetch("https://chandan-02.github.io/anime-facts-rest-api/");
    const data= await response.json();
    confirm.log(data)
    animeContainer.style.display="block"; 
    animeImg.src=data.url;
    animeName.innerText=data.artist;
    
  } catch (error) {
    console.log(error);
  }
})