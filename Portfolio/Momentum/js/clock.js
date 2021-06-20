const clock = document.querySelector("#clock");


function getClock(){
  const date = new Date(); // 현재 시간,날짜를 얻는 객체
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 페이지가 처음 load 됐을때 현재 시간을 보여주고
setInterval(getClock, 1000); // 1초마다 시간이 새로고침 됨



