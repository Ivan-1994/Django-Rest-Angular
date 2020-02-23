import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {urlAPI} from '../globals';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit {
  carId: any;
  carDetail: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get('id');
    this.getCarDetail();
  }

  getCarDetail() {
    this.http.get(urlAPI + 'cars/?id=' + this.carId)
      .subscribe((response) => {
        this.carDetail = response[0];
        console.log(response[0]);
      });
  }
}
