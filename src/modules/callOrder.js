const callOrder  = () => {

  const orderBtn = document.querySelector('.col-sm-12 > .button');
  const closeBtns = document.querySelectorAll('[title="Close"]');
  const servicesContainer = document.getElementById('services');
  const headerModal = document.querySelector('.header-modal');
  const servicesModal = document.querySelector('.services-modal');
  const overlay = document.querySelector('.overlay');

  const enableModal = (elem) => {
    elem.style.display = 'block';
    overlay.style.display = 'block';
  };

  const disableModal = (elem) => {
    elem.style.display = 'none';
    overlay.style.display = 'none';
  };

  orderBtn.addEventListener('click', () => enableModal(headerModal));

  servicesContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-success')) { 
       enableModal(servicesModal);
    }
  })

  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if(e.target.classList.contains('header-modal__close')) disableModal(headerModal);
      if(e.target.classList.contains('services-modal__close')) disableModal(servicesModal);
    })
  })
};

export default callOrder