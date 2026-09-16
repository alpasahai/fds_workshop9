import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Productdata } from '../../services/productdata';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
  productid: number | null = null;
  productname = '';
  productdesc = '';
  productprice: number | null = null;
  producttype = '';
  productunits: number | null = null;
  message = '';

  constructor(private proddata: Productdata, private router: Router) {}

  addnewProduct() {
    const newProduct = new Product(
      this.productid!,
      this.productname,
      this.productdesc,
      this.productprice!,
      this.producttype,
      this.productunits!
    );

    this.proddata.add(newProduct).subscribe((data) => {
      if (data.err == null) {
        this.message = data.num + ' new product (' + this.productname + ') was added';
        this.productid = null;
        this.productname = '';
        this.productdesc = '';
        this.productprice = null;
        this.productunits = null;
      } else {
        this.message = data.err;
      }
    });
  }
}
