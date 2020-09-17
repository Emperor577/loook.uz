import { Component, OnInit } from '@angular/core';
import {HelperService} from '../../services/helper.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bodyClass = 'page-template-template-homepage-v1 home-v1';
  temp =  [
    {
      img: 'assets/images/slider/homepage-slider-1.jpg',
      text: {
        main: 'FRANKFURT',
        secondary: 'PIZZA'
      }
    },
    {
      img: 'assets/images/slider/homepage-slider-2.jpg',
      text: {
        main: 'New!',
        secondary: 'CHEESE NUGGETS'
      }
    },
    {
      img: 'assets/images/slider/homepage-slider-3.jpg',
      text: {
        main: 'JUICY',
        secondary: 'FRIED CHICKEN'
      }
    },
    {
      img: 'assets/images/slider/homepage-slider-4.jpg',
      text: {
        main: 'CLASSIC',
        secondary: 'OR CLASSIC COMBO?'
      }
    },
    {
      img: 'assets/images/slider/homepage-slider-5.jpg',
      text: {
        main: '',
        secondary: ''
      }
    }
  ];
  constructor(
    private helper: HelperService
  ) { }

  ngOnInit(): void {
     document.getElementsByTagName('body')[0].setAttribute('class', this.bodyClass);
  }
}
