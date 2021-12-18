import {invalidInput, animate} from './helpers';

const sendForm = ( {formId, someElem = []} ) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const preloader = document.createElement('div')
  const errorText = 'Ошибка отправки'
  const successText = 'Спасибо, заявка принята! <br>Наш менеджер скоро свяжется с Вами'
  

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then((res) => res.json());
  };

  const allowSend = (inputs) => {
    let valid = true;

    inputs.forEach(input => {
      if(invalidInput(input)) valid = false;
      
    })

    return valid
  }

  const submitForm = () => {
    const formElems = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.innerHTML = '' //очистка блока для повторной загрузки
    preloader.classList.add('lds-ellipsis');
    preloader.innerHTML = '<div></div><div></div><div></div><div></div>'
    statusBlock.append(preloader);
    statusBlock.style.color = '#000'; //белый цвет текстов-статусов 
    form.append(statusBlock);

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    someElem.forEach(elem => {
      try {
        const pageElem = document.getElementById(elem.id);

        if(elem.type === 'block') {
          formBody[elem.id] = pageElem.textContent; 

        } else if (elem.type === 'input') {
          formBody[elem.id] = pageElem.value; //добавление объекту formBody нов. св-ва elem.id
        }

      } catch (err) {
        console.log('Cловили! Это не страница с калькулятором')
      }
      
    });

    
    if(allowSend(formElems)) { 
      sendData(formBody)
        .then((data) => {
            statusBlock.innerHTML = ''
            statusBlock.innerHTML = successText;
            formElems.forEach(fElem => {
              fElem.value = '';
            })
        })
        .catch(error => {
            statusBlock.innerHTML = ''
            statusBlock.textContent = errorText;
        });
       
    } else {
      alert('В форму введены не все данные или допущены ошибки');
      statusBlock.textContent = '';
    }
  };



  try {
    if(!form) {
      throw new Error('Положи форму на место, а не сайт(!)');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });

  } catch(err) {
    console.error(err.message)
  }
  
};

export default sendForm