import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public isCartPreviewActive = false;
  constructor() { }

  canReloadHomePage() {
    if (localStorage.getItem('canHomePageReload') !== null) {
      return JSON.parse(localStorage.getItem('canHomePageReload'));
    } else {
      return false;
    }
  }

  addToCart(data) {
    let products = [];
    let count = 0;
    if (localStorage.getItem('cart') === null) {
      products.push(data);
      localStorage.setItem('cart', JSON.stringify(products));
    }
    else {
      products = JSON.parse(localStorage.getItem('cart'));
      products.map(product => {
        if (Number(product.id) === Number(data.id)) {
          count++;
          product.quantity = product.quantity + data.quantity;
        }
      });
      if (count === 0) {
        products.push(data);
      }
      localStorage.setItem('cart', JSON.stringify(products));
    }
  }

  getCart() {
    const items = JSON.parse(localStorage.getItem('cart'));
    let totalPrice = 0;
    if (items) {
      items.forEach(element => {
        totalPrice = totalPrice + (element.price * element.quantity);
      });
    }
    return { items, totalPrice };
  }

  openCartPreview(e): boolean {
    return e.target.classList.contains('cart') ||
      e.target.classList.contains('cart-header') ||
      e.target.classList.contains('cart-details') ||
      e.target.classList.contains('cart-name') ||
      e.target.classList.contains('cart-price') ||
      e.target.classList.contains('cart-wrapper');
  }

  setSessionTime() {
    localStorage.setItem('sessionTime', JSON.stringify({start: Date.now(), end: Date.now() + 3600000}));
  }

  checkSessionTime() {
    const session = JSON.parse(localStorage.getItem('sessionTime'));
    if (session) {
      if (Date.now() > session.end) {
        this.clearLocalStorage();
      }
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
