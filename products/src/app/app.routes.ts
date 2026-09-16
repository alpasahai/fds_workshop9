import { Routes } from '@angular/router';
import { Home } from '../comp/home/home';
import { AddProduct } from '../comp/add-product/add-product';
import { ListProducts } from '../comp/list-products/list-products';
import { UpdateProduct } from '../comp/update-product/update-product';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'add', component: AddProduct },
  { path: 'list', component: ListProducts },
  { path: 'update/:id', component: UpdateProduct }
];
