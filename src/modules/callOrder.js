const callOrder  = () => {

  const callOrderbtn = document.querySelector('.col-sm-12 > .button');
  const headerModal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const modlCloseBtn = document.querySelector('.header-modal__close');

 
  callOrderbtn.addEventListener('click', () => {
    console.log('!!!')
    overlay.style.display = 'block';
    headerModal.style.display = 'block';
    
  });

  modlCloseBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    headerModal.style.display = 'none';
  });
};

export default callOrder