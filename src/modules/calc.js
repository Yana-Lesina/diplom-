import {invalidInput, animate} from './helpers';

const calc = () => {
   
  const calcBlock = document.querySelector('#calc > .container');
  const selectBalcony = document.getElementById('calc-type');
  const selectMaterial = document.getElementById('calc-type-material');
  const square = document.getElementById('calc-input');
  const total = document.getElementById('calc-total');


  const countPrice = () => {
    
    let price = 0;

    const sq = +square.value,
          baclPrice = +selectBalcony.value,
          materialPrice = +selectMaterial.value;

    if(baclPrice && materialPrice) {                //обязательные поля
      price = sq * baclPrice * materialPrice;
    } else {
      price = 0;
    }

    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.value = parseInt(progress * price)
      }
    })
              
  }

  calcBlock.addEventListener('input', (e) => {  
    if( e.target === selectBalcony || 
      e.target === selectMaterial ||
      e.target === square ) {

      e.target === square ? e.target.value = e.target.value.replace('/\D/g', '') : e.target.value; //запрет на ввод чего-нибудь кроме цифр
      countPrice();
      
    }
  })
};

export default calc