"use strict";
document.addEventListener('DOMContentLoaded', () => {
  const username = document.querySelector('#username');
  const registerUser = document.querySelector('#registerUser');
  const login = document.querySelector('#login');
  const list = document.querySelector('#list');

  const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  const addZero = n => n < 10 ? "0" + n : n;
  const getString = function (value) {
    if (value.split(' ').length > 2 || value.split(' ').length <= 1) {
      alert('Ошибка ввода!');
      return null;
    }
    return value;
  };

  let log = {
    userAll: JSON.parse(localStorage.getItem('userAll')) || [],
    updateLocalStorage: function () {
      localStorage.setItem('userAll', JSON.stringify(this.userAll));
    },

     authorization: function () {
      let userLogin = prompt('Введите Логин');
      let password = prompt('Введите пароль');
      let authorizationUser = this.userAll.filter((item) => {
        return ( item.login === userLogin && item.password === password);
      });
       if (authorizationUser.length === 0) {
         username.innerHTML =  'Аноним!';
        return alert("Пользователь не найден");
       } else {
         username.innerHTML = authorizationUser[0].userName + '!';
       }
    }, 
    getUser: function () {
      let newUser = {};
      let fullName = prompt('Введите через пробел Имя и Фамилию пользователя');
      if (!getString(fullName)) {
        return null;
      }
      fullName = fullName.split(' ');
      let name = fullName[0];
      let last = fullName[1];
      newUser.userName = name;
      newUser.lastName = last;

      let userLogin = prompt('Введите Логин');
      let password = prompt('Введите Пароль');
      newUser.login = userLogin;
      newUser.password = password;
  
      let date = new Date();
      let nawDate = `${addZero(date.getDate())} ${month[date.getMonth()]} ${date.getFullYear()}г., 
      ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
      newUser.regData = nawDate;
      //добавляем в масив рендерим на страницу и обновляем историю
      this.userAll.push(newUser);
      this.renderAllUser();
      this.updateLocalStorage();
    },

    deleteLi: function (value) {
      this.userAll = this.userAll.filter((item) => {
        let dataValue = item.regData.slice(-8);
        return (dataValue + "Удалить" !== value);
      });
      this.updateLocalStorage();
      this.renderAllUser();
    },
    renderAllUser: function () {
      list.textContent = '';
      this.userAll.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('user-list');
        li.innerHTML = `Имя: ${item.userName}, фамилия: ${item.lastName}, зарегестрировался: ${item.regData}`;
        
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('delete');
        btnDelete.textContent = 'Удалить';
        list.append(li);
        li.append(btnDelete);
      });
      let findLi = document.getElementsByClassName('user-list');

      for (let item of findLi) {
        item.addEventListener('click', (event) => {
          let target = event.target;
          let parent = target.closest('.user-list');
          if (target.closest('.delete')) {
            let value = parent.textContent;
            value = value.slice(-15);
            this.deleteLi(value);
          }
        });
      }
    },
  };

  registerUser.addEventListener('click', log.getUser.bind(log));
  login.addEventListener('click', log.authorization.bind(log));
  log.renderAllUser();
});


