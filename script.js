document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const submit = document.querySelector('.submit'),
        selectionValue = document.querySelector('.selection-value'),
        valueStart = document.querySelector('.value-start'),
        selectionResult = document.querySelector('.selection-result'),
        valueEnd = document.querySelector('.value-end'),
        responseLabel = document.getElementById('response'),
        errorMessage = 'Что то не так...',
        successMessage = 'Готово!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;   color: blue;';
    let valueClient = [];
    //const myKey2 = 'http://api.exchangeratesapi.io/v1/latest?access_key=306632d1029da4c6c3957483b94d31a8';
    const getData = url => fetch(url);


    selectionValue.addEventListener('change', () => {
        valueEnd.value = '';
        responseLabel.textContent = '';
        const currency = selectionValue.options[selectionValue.selectedIndex].value;
        if (currency) {
            valueClient[0] = currency;
        }
    })
    selectionResult.addEventListener('change', () => {
        valueEnd.value = '';
        responseLabel.textContent = '';
        const currency = selectionResult.options[selectionResult.selectedIndex].value;
        if (currency) {
            valueClient[1] = currency;
        }
    })


    const outputData = response => {
        if (response.status !== 200) {
            throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;
        return response.json();
    };
    const errorData = err => {
        statusMessage.textContent = errorMessage;
        valueClient.length = 0;
        console.error(err);
        return;
    };

    const rendetResult = data => {
        console.log('data: ', data);
        for (let key in data) {
            let labelValue = key.split('_');
            valueEnd.value = (data[key] * valueStart.value).toFixed(2);
            if (labelValue[0] === 'USD') {
                responseLabel.textContent = 'Долларов США (USD)';
            }
            if (labelValue[0] === 'RUB') {
                responseLabel.textContent = 'Русских рублей (RUB)';
            }
            if (labelValue[0] === 'EUR') {
                responseLabel.textContent = 'Евро (EUR)';
            }
        }
    }

    submit.addEventListener('submit', event => {
        event.preventDefault();
        submit.append(statusMessage);
        if (valueClient.length === 2) {
            const myKey = `https://free.currconv.com/api/v7/convert?q=${valueClient[0]}_${valueClient[1]}&compact=ultra&apiKey=0fbe59ab8aef333e169f`;
            getData(myKey)
                .then(outputData)
                .catch(errorData)
                .then(rendetResult);
        }
    });
});
