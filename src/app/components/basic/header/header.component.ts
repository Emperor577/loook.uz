import {Component, HostListener, OnInit} from '@angular/core';
import {AppDataService} from '../../../services/app-data.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HelperService} from '../../../services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuBurgerBtn: HTMLElement;
  closeBurgerBtn: HTMLElement;
  burgerMenu: HTMLElement;
  categories = Object([]);
  cartPreviewStatus = false;
  get cartItems() {
    return this.helper.getCart();
  }
  constructor(
    private appService: AppDataService,
    protected sanitizer: DomSanitizer,
    private helper: HelperService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.helper.checkSessionTime();
    this.menuBurgerBtn =  document.getElementById('menuBurgerBtn');
    this.closeBurgerBtn = document.getElementById('closeBurgerBtn');
    this.burgerMenu = document.getElementById('burgerMenu');
  }

  private loadCategories() {
    this.appService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  svg(path): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(path);
  }

  openCartPreview() {
    this.helper.isCartPreviewActive = true;
  }

  openBurgerBtnMenu() {
    this.menuBurgerBtn.style.display = 'none';
    this.closeBurgerBtn.style.display = 'block';
    this.burgerMenu.classList.add('burgerBtn-open');
  }

  closeBurgerBtnMenu() {
    this.closeBurgerBtn.style.display = 'none';
    this.menuBurgerBtn.style.display = 'block';
    this.burgerMenu.classList.remove('burgerBtn-open');
  }
}
