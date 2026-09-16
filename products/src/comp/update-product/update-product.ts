import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Productdata } from '../../services/productdata';
import { Product } from '../../models/product';

@Component({
  selector: 'app-update-product',
  imports: [FormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css'
})
export class UpdateProduct implements OnInit {
  objid = '';
  productid: number | null = null;
  productname = '';
  productdesc = '';
  productprice: number | null = null;
  productunits: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proddata: Productdata
  ) {}

  ngOnInit() {
    this.objid = this.route.snapshot.paramMap.get('id') ?? '';

    // grab the full list and find the one matching this _id
    // (simplest approach given our server only has a getlist route)
    this.proddata.getlist().subscribe((products) => {
      const found = products.find((p: any) => p._id === this.objid);
      if (found) {
        this.productid = found.id;
        this.productname = found.name;
        this.productdesc = found.description;
        this.productprice = found.price;
        this.productunits = found.units;
      }
    });
  }

  updateProduct() {
    const updated = {
      objid: this.objid,
      name: this.productname,
      description: this.productdesc,
      price: this.productprice,
      units: this.productunits
    };

    this.proddata.updateitem(updated).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
