import { NavController } from '@ionic/angular';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(
    public productService: ProductService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  viewProductColors(){
    this.navCtrl.navigateForward('product-color');
  }

  viewPaintCalculator(){
    this.navCtrl.navigateForward('product-calculator');
  }
  
  viewProductDetail(product){
    this.productService.selectedProduct = product;
  }

}
