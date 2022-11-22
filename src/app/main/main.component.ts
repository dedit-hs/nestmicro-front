import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: any[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.all().subscribe(
      products => this.products = products
    )
  }

  like(_id: string) {
    this.mainService.like(_id).subscribe(
      () => {
        this.products = this.products.map(
          (p: Product) => {
            if (p._id === _id) {
              p.likes++
            }

            return p;
          }
        );
      }
    );
  }

}
