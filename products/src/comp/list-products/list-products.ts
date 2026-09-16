import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Productdata } from '../../services/productdata';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list-products',
  imports: [RouterLink],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css'
})
export class ListProducts implements OnInit {
  products = signal<Product[]>([]);

  constructor(private proddata: Productdata) {}

  ngOnInit() {
    this.proddata.getlist().subscribe((data) => {
      this.products.set(data);
    });
  }

  deleteproduct(id: string) {
    if (confirm('Are you sure you want to delete this item')) {
      this.proddata.deleteitem(id).subscribe((data) => {
        this.products.set(data);
      });
    }
  }
}
