const modal = {

  ModalMoreInfo  : document.querySelector('.modal-more-info'),
  BTnModalClose  : document.querySelector('#close-more-info'),
  ImcLeabel      : document.querySelector('#total'),
  estadoPersonal : document.querySelector('#Estado'),
  Mainbox        : document.querySelector('main'),
  open(){
    modal.estadoPersonal.innerHTML = "me mama".toUpperCase("me mama")
    modal.Mainbox.style.borderRadius =" 1.0rem 1.0rem 0 0"
    modal.ModalMoreInfo.classList.remove('hide')
  },
   close(){
     modal.ModalMoreInfo.classList.add('hide')
   }
}
modal.BTnModalClose.onclick = () => {
  modal.close()
}
export default modal;
window.addEventListener('keydown',(event)=>{
  if(event.key == "Escape"){
    modal.close();
  }
})