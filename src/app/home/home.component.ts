import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  name = 'Vuong';
  age = 25;
  fruits = ['Táo','Nho','Cam','Sau rieng'];
  fruits2 = [
    { name: 'Táo', price: 20, discount: true},
    { name: 'Nho', price: -10, discount: false },
    { name: 'Cam', price: -30, discount: false },
    { name: 'Buoi', price: 20, discount: true }
  ]
  districts: Array<string> = ['Quận huyện'];
  vietnamData = [
    { city: 'Chọn thành phố', district: ['Quận huyện'] },
    { city: 'An Giang', district: ['Thành phố Long Xuyên','Thành phố Châu Đốc','Thị xã Tân Châu','Huyện An Phú','Huyện Châu Phú']},
    { city: 'Bà Rịa - Vũng Tàu', district: ['Thành phố Vũng Tàu','Thị xã Bà Rịa','Thị xã Phú Mỹ','Huyện Châu Đức','Huyện Côn Đảo']},
    { city: 'Long An', district: ['Thành phố Tân An','Huyện Cần Giuộc','Huyện Cần Đước','Huyện Đức Hòa','Huyện Đức Huệ']}
  ]

  handleChaneCity(event: any): void {
    const city = event.target.value;
    // Solution 1                   
    // const search = this.vietnamData.filter(data => data.city === city)
    // if(search && search.length >0) { 
    //   this.districts = search[0].district;
    // }
    //solution 2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || []
  }

  ngOnInit(): void {
    console.log('cities:',this.vietnamData);
  }
}
