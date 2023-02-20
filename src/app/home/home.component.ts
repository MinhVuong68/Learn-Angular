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

  ngOnInit(): void {
    
  }
}
