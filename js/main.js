import CalcImc from "./CalcImc.js"
import AlertError from "./AlertError.js"
import modal from "./modal.js" 

const form = document.querySelector('form');

const inputPeso = document.querySelector('#peso')
const inputALtura = document.querySelector('#altura');

form.onsubmit = (event) => {
  event.preventDefault();
  let peso   = inputPeso.value;
  let altura = inputALtura.value;
  
  inputALtura.oninput = () => AlertError.close()
  inputPeso.oninput   = () =>  AlertError.close()
  
  let result = errorModal(peso) || errorModal(altura)
  if(peso > 500 || altura >250){
    AlertError.open();
    return
  }
  if(result){
    AlertError.open();
    return
  }
  

  let resultadoImc = CalcImc(peso,altura)

  modal.ImcLeabel.innerText = `${resultadoImc}`
  modal.open()
  
}
function errorModal(valor){
  return isNaN(valor) || valor == "";
}

