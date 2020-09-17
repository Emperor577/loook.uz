import {Component, Input, OnInit, OnChanges, SimpleChanges, ElementRef, HostListener} from '@angular/core';
import {HelperService} from '../../services/helper.service';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss'],
})
export class CartPreviewComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  onClick(e) {
    if (
      !this.eRef.nativeElement.contains(e.target) && this.helper.isCartPreviewActive && !this.helper.openCartPreview(e)
    ) { // if click outside of this component
     this.close();
    }
    else if (this.helper.openCartPreview(e)) {
      this.open();
    }
  }
  get cartItems() {
    return this.helper.getCart();
  }
  constructor(
    private helper: HelperService,
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.helper.isCartPreviewActive = false;
    document.getElementById('cart-preview').classList.remove('d-flex');
  }

  open() {
    this.helper.isCartPreviewActive = true;
    document.getElementById('cart-preview').classList.add('d-flex');
  }
}
