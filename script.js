document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const output = document.getElementById('output');

    const getData = (url) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.setRequestHeader('Content-type', 'application/json');

            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText);
                    resolve(response);
                } else {
                    reject(request.statusText);
                }
            });
            request.send();
        })

    };

    const outputPhotos = (data) => {
        data.forEach(item => {
            output.insertAdjacentHTML('beforebegin',
                ` <h4>${item.title}</h4>
            <img src="${item.thumbnailUrl}" alt="${item.title}"> `);
        })

    };
    const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
    const oneImg = getData(`${urlPhotos}/1`),
        twoImg = getData(`${urlPhotos}/2`);
    /*     oneImg
            .then(outputPhotos)
            .catch(error => console.log(error));
        twoImg
            .then(outputPhotos)
            .catch(error => console.log(error)); */
    /* Promise.race([oneImg, twoImg])  //виполняется только один первый отработавший зен
        .then(outputPhotos)
        .catch(error => console.log(error)); */

    Promise.all([oneImg, twoImg])  //получаем масив потому на странице он не отображается потому нужно переберать
        .then(outputPhotos)
        .catch(error => console.log(error));
})
