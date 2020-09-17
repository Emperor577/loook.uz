import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppDataService} from '../../services/app-data.service';
import {HelperService} from '../../services/helper.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  bodyClass = 'full-width list-view columns-2 archive woocommerce-page html-change';
  products = Object([]);
  constructor(
    private route: ActivatedRoute,
    private appService: AppDataService,
    private helper: HelperService
  ) { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.pageYOffset > 100) {
      document.getElementById('header').classList.add('header-fixed');
      document.getElementById('cart-header').classList.add('cart-header-active');
    } else {
      document.getElementById('header').classList.remove('header-fixed');
      document.getElementById('cart-header').classList.remove('cart-header-active');
    }
  }

  ngOnInit(): void {
    document.getElementsByTagName('body')[0].setAttribute('class', this.bodyClass);
    this.route.paramMap.subscribe(params => {
      this.appService.getCategory(params.get('id')).subscribe(data => {
        this.products = data;
        this.products.forEach((key) => {
          key.quantity = 1;
        });
      });
    });
    localStorage.setItem('canHomePageReload', 'true');
  }

  setUpQuantity(product) {
    product.quantity += 1;
  }
  setDownQuantity(product) {
    if (product.quantity > 1) {
      product.quantity -= 1;
    }
  }
  addProductsToCart(product) {
    this.helper.setSessionTime();
    this.helper.addToCart(product);
  }
}
