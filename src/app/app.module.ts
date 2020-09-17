import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/basic/header/header.component';
import { FooterComponent } from './components/basic/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { PricePipe } from './pipes/price.pipe';
import { CarouselComponent } from './components/carousel/carousel.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    CartPreviewComponent,
    PricePipe,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    NgxUsefulSwiperModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
