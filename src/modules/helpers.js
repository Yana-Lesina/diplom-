const invalidInput = (input) => {
    const fioRExp = /([a-zА-Я]+\s?)+/gi;
    const phoneRExp = /\+?\d{10,16}/g;

    if(input.name === 'fio') return input.value.replace(fioRExp, '') !== '' || input.value === '';
    if(input.name === 'phone') return input.value.replace(phoneRExp, '') !== '' || input.value === '';

};

export {invalidInput}