console.log('hello world');

let count = 0;

let element = document.getElementById('counter');

function increase(){
  count += 1;
  element.innerText = count;
  console.log(count);
}
function decrease(){
  count -= 1;
  element.innerText = count;

  console.log();
}

function reset(){
  count = 0;
  element.innerText = count;

}

function selectTheme(theme){
 let body = document.getElementsByTagName('body');
  body[0].className = theme;

  let main = document.getElementsByTagName('main');
  main[0].className = theme;

  buttons = document.getElementsByTagName('button');
  for(let i = 0; i < buttons.length; i++){
    buttons[i].className = theme;
  }
}




console.log(count);