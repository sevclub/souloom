const buttonElement=document.querySelector('.js-display');
const startButton ='<button class="start_box js-start-button">Start</button>';
const ComingButton ='<button class="coming_box js-coming-button">Coming soon</button>';
disPlay()
function disPlay(){
  buttonElement.innerHTML=startButton
  attachStartButtonListener();
  setTimeout(function() {
    document.querySelector('.start_box').style.opacity = '1';
}, 500);
}


function attachStartButtonListener(){
  const startBtn = document.querySelector('.js-start-button');
  if (startBtn) {
    startBtn.addEventListener('click',function(){
      buttonElement.innerHTML=ComingButton;
      setTimeout(function(){
        disPlay()
      },1000)
    })
  }
}
