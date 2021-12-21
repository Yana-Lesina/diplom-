const serviceSlider  = () => {
  const slides = document.querySelectorAll('#services > .container > .row > .col-md-12');
  const arrows = document.querySelector('.services-arrows');

  const moveRignt = (right, left) => {
    slides[right].style.display = 'block';
    slides[left].style.display = 'none';
  };

  const moveLeft = (right, left) => {
    slides[left - 1].style.display = 'block';
    slides[right - 1].style.display = 'none';
  };

  const desctopSlider = () => {
      let hiddenRight = 2;
      let hiddenLeft = 0;

      slides.forEach((slide, i) => {
        slide.style.display = 'none';
        if(i < hiddenRight) {
          slide.style.display = 'block';
        }
      });

      arrows.addEventListener('click', (e) => {
        if(e.target.closest('.services__arrow--right')) {
          if (hiddenRight === slides.length || (document.body.offsetWidth < 576)) return false; //запрет пролистывания

          moveRignt(hiddenRight, hiddenLeft);
          hiddenRight++;
          hiddenLeft++;
        }

        if(e.target.closest('.services__arrow--left')) {
          if (hiddenLeft === 0 || (document.body.offsetWidth < 576)) return false; //запрет пролистывания
          
          moveLeft(hiddenRight, hiddenLeft);
          hiddenRight--;
          hiddenLeft--;
        }
      });
  };

  const mobileSlider = () => {
    let hiddenRight = 1;
    let hiddenLeft = 0;

    slides.forEach((slide, i) => {
      slide.style.display = 'none';
      if(i < hiddenRight) {
        slide.style.display = 'block';
      }
    });

    arrows.addEventListener('click', (e) => {
      if(e.target.closest('.services__arrow--right')) {
        if (hiddenRight === slides.length || document.body.offsetWidth >= 576) return false; //запрет пролистывания

        moveRignt(hiddenRight, hiddenLeft);
        hiddenRight++;
        hiddenLeft++;
      }

      if(e.target.closest('.services__arrow--left')) {
        if (hiddenLeft === 0 || document.body.offsetWidth >= 576) return false; //запрет пролистывания
        
        moveLeft(hiddenRight, hiddenLeft);
        hiddenRight--;
        hiddenLeft--;
      }
    });
  }


  if(document.body.offsetWidth >= 576) {
    desctopSlider();

  } else {
    mobileSlider();
  }
};

export default serviceSlider;