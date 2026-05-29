const hourEl=document.querySelector('.hour');
const minuteEl=document.querySelector('.minute');
const secondEl=document.querySelector('.second');
function updateClock(){
  const time=new Date();
  setTimeout(updateClock,1000);
  const hourGet=time.getHours();
  const minuteGet=time.getMinutes();
  const secondGet=time.getSeconds();
const hourDeg=(hourGet/12)*360;
hourEl.style.transform=`rotate(${hourDeg}deg)`;
const minuteDeg=(minuteGet/60)*360;
minuteEl.style.transform=`rotate(${minuteDeg}deg)`;
const secondDeg=(secondGet/60)*360;
secondEl.style.transform=`rotate(${secondDeg}deg)`;

 
}
updateClock();