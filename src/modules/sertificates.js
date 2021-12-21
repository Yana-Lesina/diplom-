const sertificates = () => {
  const docsContainer = document.querySelector('#documents > .container');
  const overlay = document.querySelector('.overlay');
  const headerModal = document.querySelector('.header-modal');
  const headerModalInner = document.querySelector('.header-modal > .fancybox-skin');


  docsContainer.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.classList.contains('sertific-img')) {

      overlay.style.display = 'block';

      const modalWind = headerModal.cloneNode();
      const modalWindInner = headerModalInner.cloneNode();
      modalWindInner.innerHTML = `<img src="${e.target.src}" class="img-responsive sertific-img" alt="" width = 400px>
                                  <span title="Close" class="header-modal__close">x</span>`
      modalWind.append(modalWindInner);

      modalWind.style.display = 'block';
      document.body.append(modalWind);

      modalWind.addEventListener('click', (e) => {
        if(e.target.classList.contains('header-modal__close')) {
          modalWind.style.display = 'none';
          overlay.style.display = 'none';
          
        }
      })
    }
  })
}

export default sertificates;