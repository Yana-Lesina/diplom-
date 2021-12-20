const clientSlider = () => {

  const benefitsWrap = document.querySelector('.benefits-wrap');
  const benefitsItem = document.querySelectorAll('.benefits__item');
  const arrowL = document.querySelector('.benefits__arrow--left');
  const arrowR = document.querySelector('.benefits__arrow--right');

  let position = 0;
  const slidesToShow = 3; //количество элементов на виду
  let itemWidth; //один шаг слайдера
  document.body.offsetWidth >= 576 ? itemWidth = benefitsWrap.clientWidth / slidesToShow : itemWidth = benefitsWrap.clientWidth;

  let newElem1, //для иллюзии бесконечного слайдера 
      newElem2;

  const desctopSliderRight = () => {
    position -= itemWidth;

    if(Math.abs(+position) === (benefitsItem.length - 2) * itemWidth) {
      newElem1 = benefitsItem[0].cloneNode(true);
      newElem2 = benefitsItem[1].cloneNode(true);
      benefitsWrap.append(newElem1); //в коллекцию не добавлять
      benefitsWrap.append(newElem2); //в коллекцию не добавлять
      benefitsWrap.style.transform = `translateX(${position}px)`;

    } else if (Math.abs(+position) === benefitsItem.length * itemWidth) {
      position = 0;
      benefitsWrap.style.transform = `translateX(${position}px)`;

      newElem1.remove();
      newElem2.remove();
    } else {
      benefitsWrap.style.transform = `translateX(${position}px)`;
    }
  };

  const desctopSliderLeft = () => {
    position += itemWidth;

    if(+position === itemWidth) {
      newElem1 = benefitsItem[benefitsItem.length - 1].cloneNode(true);
      newElem2 = benefitsItem[benefitsItem.length - 2].cloneNode(true);
      benefitsWrap.insertBefore(newElem2, benefitsItem[0]); //в коллекцию не добавлять
      benefitsWrap.insertBefore(newElem1, benefitsItem[0]); //в коллекцию не добавлять
      benefitsWrap.style.transform = `translateX(${-position}px)`;

    } else if(+position === itemWidth * 2) {
      benefitsWrap.style.transform = `translateX(${0}px)`;
     
    } else if(+position === itemWidth * 3) {
      position = - (benefitsItem.length - 3) * itemWidth;
      benefitsWrap.style.transform = `translateX(${position}px)`;
      newElem1.remove();
      newElem2.remove();

    } else {
      benefitsWrap.style.transform = `translateX(${position}px)`;
    }
  };

  const mobileSliderRight = () => {
    position -= itemWidth;
    if(position === -benefitsItem.length * itemWidth) position = 0;
    benefitsWrap.style.transform = `translateX(${position}px)`;
  };

  const mobileSliderLeft = () => {
    position += itemWidth;
    if(position > 0) position = - (benefitsItem.length - 1)* itemWidth;
    benefitsWrap.style.transform = `translateX(${position}px)`;
  };
 


  benefitsItem.forEach(item => { 
    item.style.minWidth = `${itemWidth}px`;
  }); //размещаем 3 элемента равномерно по блоку 

  arrowL.addEventListener('click', () => {
    if(document.body.offsetWidth >= 576) {
      desctopSliderLeft();

    } else {
      mobileSliderLeft();
    }
  });

  arrowR.addEventListener('click', () => {

    if(document.body.offsetWidth >= 576) {
      desctopSliderRight();

    } else {
      mobileSliderRight();
    }

  });
};

export default clientSlider;