import { Component, OnInit } from '@angular/core';
import {HelperService} from '../../../services/helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  get cartItems() {
    return this.helper.getCart();
  }
  constructor(
    private helper: HelperService
  ) { }

  ngOnInit(): void {
  }

}
