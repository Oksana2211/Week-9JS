const nameW = document.querySelector('input[name="name"]'); // поле ввода для имени
const surnameW = document.querySelector('input[name="surname"]'); // поле ввода для фамилии
const rateW = document.querySelector('input[name="rate"]'); // поле ввода ставки
const daysW = document.querySelector('input[name="days"]'); //поле ввода кол-ва отработанных дней

const btn = document.querySelector('.btn'); // кнопка

const divWorker = document.querySelector('.divWorker'); //основной контейнер для вывода информации
const nameWorker = document.createElement('span'); // выводим имя
const surnameWorker = document.createElement('span'); // выводим фамилию 
const rateWorker = document.createElement('span'); // выводим ставку
const daysWorker = document.createElement('span'); // выводим кол-во отработанных дней
const salary = document.createElement('span'); // выводим зарплату

divWorker.appendChild(nameWorker);
divWorker.appendChild(surnameWorker);
divWorker.appendChild(rateWorker);
divWorker.appendChild(daysWorker);
divWorker.appendChild(salary);



class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate; //ставка за день работы
    this.days = days; //количество отработанных дней
  }

  getSalary() {

    nameWorker.innerHTML += "Имя: " + this.name;

    surnameWorker.innerHTML += "Фамилия: " + this.surname;

    rateWorker.innerHTML += "Ставка за день работы: " + this.rate;

    daysWorker.innerHTML += "Количество отработанных дней: " + this.days;

    salary.innerHTML += "Зарплата: " + this.rate * this.days + " р.";

  }

}


function eddWorker() {

  let worker1 = new Worker(nameW.value, surnameW.value, rateW.value, daysW.value);
  worker1.getSalary();
}

btn.addEventListener("click", eddWorker);






















