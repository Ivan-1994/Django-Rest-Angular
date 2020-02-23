import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {urlAPI} from '../globals';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  carBrand: any;
  carModel: any;
  responseOptions: any;
  carSecurity = {};
  carFeatures = {};
  newCar = {
    title: '',
    brand: '',
    car_model: '',
    modification: '',
    year: '',
    mileage: '',
    engine_displacement: '',
    body_style: '',
    type_fuel: '',
    color: '',
    transmission: '',
    car_condition: '',
    interior_material: '',
    vin_code: '',
    price: '',
    description: '',
    car_features: [],
    car_security: []
  };

  constructor(private http: HttpClient) {
    this.http.options(urlAPI + 'cars/')
      .subscribe((response) => {
        this.responseOptions = response;
        this.responseOptions = this.responseOptions.actions.POST;
      });
    this.http.get(urlAPI + 'carsbrand/')
      .subscribe((response) => {
        this.carBrand = response;
        // console.log(this.response);
      });
  }

  sendDataPOST() {
    this.newCar.car_security = [];
    this.newCar.car_features = [];
    for (const key in this.carSecurity) {
      if (this.carSecurity[key]) {
        this.newCar.car_security.push(key);
      }
    }
    for (const key in this.carFeatures) {
      if (this.carFeatures[key]) {
        this.newCar.car_features.push(key);
      }
    }
    this.http.post(urlAPI + 'cars/', this.newCar).subscribe((response) => {
      console.log(response);
    }, err => {
      console.log(err.error);
    }, () => {
      console.log('completed');
    });
  }

  changeCarModels(event) {
    console.log(event.target.value);
    if (event.target.value === 0) {
      this.carModel = [];
    } else {
      this.http.get(urlAPI + 'carsmodel/?brand=' + event.target.value)
        .subscribe((response) => {
          this.carModel = response;
          // console.log(this.response);
        });
    }
  }

  test_carsPOST() {
    const dictcar = {
      title: 'H1', modification: 'gx71', year: '2121', engine_displacement: 'asdasd', brand: '', car_model: '',
      car_features: [1], car_security: [1, 2], mileage: '213213', vin_code: 'asdasd', price: '12121', description: '123123123',
      type_fuel: '1', color: '1', body_style: '1', transmission: '1', car_condition: '1', interior_material: '1'
    };
    this.http.post(urlAPI + 'cars/', dictcar).subscribe((response) => {
      console.log(response);
    }, err => {
      console.log(err.error);
    }, () => {
      console.log('completed');
    });
  }

  ngOnInit() {
  }

}
