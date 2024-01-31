/*Variáveis*/
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

/*Evento*/
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)


/*Funções*/
function handleTryClick(event){
  event.preventDefault() /*esse prevent evita que o código execute o padrão*/

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = "" ;
  xAttempts++
}

function handleResetClick(event){
  /*screen1.classList.remove("hide")
  screen2.classList.add("hide")*/
  toggleScreen()
  xAttempts = 1
}

function toggleScreen (){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}