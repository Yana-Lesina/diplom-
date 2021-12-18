import {invalidInput} from './helpers'

const inputs = () => {
  const inputs = document.querySelectorAll('input');
  
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        
      if ( !invalidInput(e.target) ) {
        input.classList.remove('error');
        input.classList.add('correct');

      } else {
        input.classList.add('error');
      }
    })
  })

};

export default inputs;