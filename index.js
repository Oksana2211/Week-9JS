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















const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
  },
  {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];

const divTransport = document.querySelector('.divTransport');//основной контейнер для транспорта
// divTransport.innerHTML += "";

// const btnTransportCar = document.createElement('button'); //кнопка для вывода машин
// btnTransportCar.textContent = "Машины";
// divTransport.appendChild(btnTransportCar);

class Transport {
  constructor(type, brand, doors, price, image) {

    this.type = type;
    this.brand = brand;
    this.doors = doors;
    this.price = price;
    this.image = image;
  }
  getInfo() {
    return `${this.brand}`;
  }
  getPrice() {
    return `${this.price} р.`;
  }
}

// function TransportCar() {
for (const element of data) {
  const imgTransport = document.createElement('img'); // контейнер для фото
  imgTransport.classList.add('img');
  const brandTransport = document.createElement('span'); // контейнер для бренда
  const doorsTransport = document.createElement('span'); // контейнер для кол-ва дверей
  const priceTransport = document.createElement('span'); // контейнер для цены
  const doorsCar = document.createElement('span'); // контейнер для вывода кол-ва дверей
  const maxSpeedBike = document.createElement('span'); // контейнер для вывода макс скорости байка

  divTransport.appendChild(imgTransport);
  divTransport.appendChild(brandTransport);
  divTransport.appendChild(doorsTransport);
  divTransport.appendChild(priceTransport);

  divTransport.appendChild(doorsCar);
  divTransport.appendChild(maxSpeedBike);


  let type = element.type;
  let brand = element.brand;
  let doors = element.doors;
  let price = element.price;
  let img = element.image;

  class Car extends Transport {
    constructor(type, brand, doors, price, image) {
      super("car", brand, doors, price, image);
      this.doorsCount = doors;
    }


    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getDoorsCount = this.getDoorsCount.bind(this);

    getDoorsCount() {
      return `Количество дверей: ${this.doorsCount}`;
    }
  }

  class Bike extends Transport {
    constructor(type, brand, doors, price, image, speed) {
      super('bike', brand, doors, price, image, speed);
      this.maxSpeed = speed;
    }

    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getMaxSpeed = this.getMaxSpeed.bind(this);

    getMaxSpeed() {
      return `Макс. скорость: ${this.maxSpeed} км/ч`;
    }
  }


  if (element.type === "car") {
    let car = new Car(`${type}`, `${brand}`, `${doors}`, `${price}`, `${img}`);
    let carInfo = car.getInfo();
    let carPrice = car.getPrice();
    let carDoors = car.getDoorsCount();
    imgTransport.src = `${img}`;
    brandTransport.innerHTML += `${carInfo}`;
    priceTransport.innerHTML += `${carPrice}`;
    doorsCar.innerHTML += `${carDoors}`;
  }


  if (element.type === "bike") {
    let bike = new Bike(`${type}`, `${brand}`, `${doors}`, `${price}`, `${img}`);
    let bikeInfo = bike.getInfo();
    let bikePrice = bike.getPrice();
    let bikeMaxSpeed = bike.getMaxSpeed();
    imgTransport.src = `${img}`;
    brandTransport.innerHTML += `${bikeInfo}`;
    priceTransport.innerHTML += `${bikePrice}`;
    maxSpeedBike.innerHTML += `${bikeMaxSpeed}`;
  }

};

// console.log(Car);


// btnTransportCar.addEventListener("click", TransportCar);

// function TransportBike() {}



















// data.forEach((element) => {
//   const imgTransport = document.createElement('img'); // контейнер для фото
//   imgTransport.classList.add('img');
//   const brandTransport = document.createElement('span'); // контейнер для бренда
//   const doorsTransport = document.createElement('span'); // контейнер для кол-ва дверей
//   const priceTransport = document.createElement('span'); // контейнер для цены
//   const doorsCar = document.createElement('span'); // контейнер для вывода кол-ва дверей
//   const maxSpeedBike = document.createElement('span'); // контейнер для вывода макс скорости байка

//   divTransport.appendChild(imgTransport);
//   divTransport.appendChild(brandTransport);
//   divTransport.appendChild(doorsTransport);
//   divTransport.appendChild(priceTransport);
//   // divTransport.appendChild(btnTransport);
//   divTransport.appendChild(doorsCar);
//   divTransport.appendChild(maxSpeedBike);


//   let type = element.type;
//   let brand = element.brand;
//   let doors = element.doors;
//   let price = element.price;
//   let img = element.image;

//   if (element.type === "car") {
//     class Car extends Transport {
//       constructor(type, brand, doors, price, image) {
//         super("car", brand, price, image, doors);
//         this.doorsCount = doors;
//       }
//       getInfo = this.getInfo.bind(this);
//       getPrice = this.getPrice.bind(this);
//       getDoorsCount = this.getDoorsCount.bind(this);

//       getDoorsCount() {
//         return `Количество дверей: ${this.doorsCount}`;
//       }
//     }
//     let car = new Car(`${price}`, `${brand}`, `${doors}`);
//     let carInfo = car.getInfo();
//     let carPrice = car.getPrice();
//     let carDoors = car.getDoorsCount();
//     imgTransport.src = `${img}`;
//     brandTransport.innerHTML += `${carInfo}`;
//     priceTransport.innerHTML += `${carPrice}`;
//     doorsCar.innerHTML += `${carDoors}`;
//   }

// if (element.type === "bike") {
//   class Bike extends Transport {
//     constructor(type, brand, doors, price, image, maxSpeed) {
//       super('bike', brand, price, image, doors, maxSpeed);
//       this.maxSpeed = speed;
//     }

//     getInfo = this.getInfo.bind(this);
//     getPrice = this.getPrice.bind(this);
//     getMaxSpeed = this.getMaxSpeed.bind(this);

//     getMaxSpeed() {
//       return `Макс. скорость: ${this.maxSpeed} км/ч`;
//     }
//   }
//   let bike = new Bike(`${price}`, `${brand}`, `${speed}`);
//   let bikeInfo = bike.getInfo();
//   let bikePrice = bike.getPrice();
//   let bikeMaxSpeed = bike.getMaxSpeed();
//   imgTransport.src = `${img}`;
//   brandTransport.innerHTML += `${bikeInfo}`;
//   priceTransport.innerHTML += `${bikePrice}`;
//   maxSpeedBike.innerHTML += `${bikeMaxSpeed}`;
// }

// });
