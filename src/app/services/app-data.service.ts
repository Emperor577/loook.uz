import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private baseUrl = 'https://loook.test/index.php/';
  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get(this.baseUrl + 'v1/category');
  }

  getCategory(id) {
    return this.http.get(this.baseUrl + 'v1/category/single-category?id=' + id);
  }
}
