import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.all().subscribe(
      products => {
        this.products = products;
      }
    )
  }

  deleteProduct(_id: string): void {
    if (confirm('Are you sure want to delete this product?')) {
      this.productService.delete(_id).subscribe(
        () => {
          this.products = this.products.filter(p => p._id !== _id);
        }
      )
    }
  }

}
