import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {urlAPI} from '../globals';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  cars: any;
  hover = {};

  constructor(private http: HttpClient) {
    this.getCars();
  }

  getCars() {
    this.http.get(urlAPI + 'cars/')
      .subscribe((response) => {
        this.cars = response;
        console.log(response);
      });

  }

  ngOnInit() {
  }

}

/*
categories = {
    body_style: {1: 'Седан', 2: 'Купе', 3: 'Универсал', 4: 'Хэтчбек'},
    type_fuel: {1: 'Бензин', 2: 'Дизель', 3: 'Бензин/Газ', 4: 'Электро'},
    color: {1: 'Белый', 2: 'Черный', 3: 'Голубой', 4: 'Серебристый'},
    transmission: {1: 'Механика', 2: 'Автомат', 3: 'Типтроник', 4: 'Вариатор'},
    car_condition: {1: 'Хорошее', 2: 'Требует ремонта', 3: 'После ДТП'},
    interior_material: {1: 'Кожаный салон', 2: 'Алькантара', 3: 'Велюр', 4: 'Ткань'},
    car_features: {
      1: 'Кондиционер',
      2: 'Эл. стеклоподъемники',
      3: 'Усилитель руля',
      4: 'Климат контроль',
      5: 'Круиз контроль',
      6: 'Бортовой компьютер',
      7: 'Подогрев зеркал',
      8: 'Подогрев сидений',
      9: 'Пневмоподвеска'
    },
    car_security: {
      1: 'ABS',
      2: 'ESP',
      3: 'ESP',
      4: 'Иммобилайзер',
      5: 'Подушка безопасности',
      6: 'Сигнализация',
      7: 'Центральный замок',
      8: 'Иммобилайзер'
    }
  };
dictcategory = {
    body_style: {},
    type_fuel: {},
    color: {},
    transmission: {},
    car_condition: {},
    interior_material: {},
    car_features: {},
    car_security: {}
  };

  this.http.options('http://127.0.0.1:8000/cars/')
      .subscribe((response) => {
        this.cars = response;
        this.cars = this.cars.actions.POST;
        for (const key in this.cars) {
          if (this.dictcategory[key]) {
            for (const i in this.cars[key].choices) {
              if (key === 'car_security' || key === 'car_features') {
                this.dictcategory[key][Number(this.cars[key].choices[i].value)] = this.cars[key].choices[i].display_name;
              } else {
                this.dictcategory[key][Number(this.cars[key].choices[i].value)] = this.cars[key].choices[i].display_name;
              }
            }
          }
        }
      });
    console.log(this.dictcategory);
 */
