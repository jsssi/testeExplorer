function cal(peso,altura){
 
    let imc = (peso*peso)/altura;
    return imc.toFixed(0)
  
}
export default cal;