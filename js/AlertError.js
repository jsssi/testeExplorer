const modalError ={
  Element:document.querySelector('.alert'),
  open(){
    modalError.Element.classList.remove('hide')
  },
  close(){
    modalError.Element.classList.add('hide')
  }
}
export default modalError