import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  form!: FormGroup;
  _id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      image: ''
    })

    this._id = this.route.snapshot.params['_id'];
    this.productService.get(this._id).subscribe(
      product => this.form.patchValue(product)
    );
  }

  submit(): void {
    this.productService.update(this._id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['admin/products'])
      }
    );
  }

}
