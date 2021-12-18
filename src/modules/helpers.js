//используется для проверки input на этапе ввода и при отправке
const invalidInput = (input) => {
    const fioRExp = /([a-zА-Я]+\s?)+/gi;
    const phoneRExp = /\+?\d{10,16}/g;

    if(input.name === 'fio') return input.value.replace(fioRExp, '') !== '' || input.value === '';
    if(input.name === 'phone') return input.value.replace(phoneRExp, '') !== '' || input.value === '';

};

//используется для calc 
const  animate = ({timing, draw, duration}) => {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};


export {invalidInput, animate}