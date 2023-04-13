import { Modal } from "./modal.js";
import { alertError } from "./alert-error.js";
import { calculateIMC , notNumber} from "./utils.js"
// Variaveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()
// Funcoes
form.onsubmit = (e) => {
  e.preventDefault()

  const weigth = inputWeight.value
  const heigth = inputHeight.value

  const weightOrHeightIsNotNumber = notNumber(weigth) || notNumber(heigth)

  if(weightOrHeightIsNotNumber){
    alertError.open()
    return;
  } 

  alertError.close()

  const result = calculateIMC(weigth,heigth)
  displayResultMessage(result)
}

function displayResultMessage(result){
  const message = `Seu IMC = ${result}`

  Modal.message.innerText = message
  Modal.open()
}


