import { Component, OnInit } from '@angular/core';
import { Productdata } from '../../services/productdata';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  count = 0;

  constructor(private proddata: Productdata) {}

  ngOnInit() {
    this.proddata.getprodcount().subscribe((data) => {
      this.count = data.count;
    });
  }
}
