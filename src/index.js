import callOrder from './modules/callOrder'
import clientSlider from './modules/clientSlider'
import serviceSlider from './modules/serviceSlider'
import timer from './modules/timer'
import inputs from './modules/inputs'
import calc from './modules/calc'
import sendForm from './modules/sendForm'


callOrder();
inputs();
clientSlider();


serviceSlider();
window.addEventListener('resize', () => {
  serviceSlider(); 
}, false);


const countdowns = document.querySelectorAll('.countdown');
if(countdowns.length !== 0) {
  countdowns.forEach(countdown => {
    timer(countdown, '29 december 2021 23:30:00'); 
  })
}

if(document.body.classList.contains('balkony')) {
  calc();
}

const forms = document.querySelectorAll('form');
if(forms.length !== 0) {
  forms.forEach(form => {
    sendForm({
      formId: form.id, 
      someElem: [
        {
          type: 'input', 
          id: 'calc-total'
        }
      ]
    })
  })
} else {
  console.log('Упс.. Формы потерялись..')
}



