import {Component, OnInit, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() arrowBtn;
  @Input() data;
  @Input() interval;
  slideTransform = 0;
  slideCount = 0;
  slides;
  tempSlides = [
    {
      img: 'assets/images/slider/homepage-slider-1.jpg',
      text: {
        main: 'Main text 0',
        secondary: 'secondary text'
      }
    },
    {
      img: 'assets/images/slider/homepage-slider-1.jpg',
      text: {
        main: 'Main text 1',
        secondary: 'secondary text'
      }
    },
    {
      img: 'assets/images/slider/homepage-slider-1.jpg',
      text: {
        main: 'Main text 2',
        secondary: 'secondary text'
      }
    },
  ];
  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      this.slides = this.data;
    }
    if (!this.data) {
      this.slides = this.tempSlides;
    }
    if (this.interval) {
      this.startInterval();
    }
  }

  slideNext() {
    const slides = document.getElementsByClassName('custom-slide');
    if (this.slideCount < slides.length - 1) {
      this.slideCount++;
      this.paginationChange();
      this.slideTransform += -100;

      for (let i = 0; i < slides.length; i ++) {
        slides.item(i).setAttribute('style', `transition: all 1s ease-in-out; transform: translateX(${this.slideTransform}%)`);
      }

    }
  }

  slidePrevious() {
    const slides = document.getElementsByClassName('custom-slide');
    if (this.slideCount > 0) {
      this.slideCount--;
      this.paginationChange();
      this.slideTransform += 100;
      for (let i = 0; i < slides.length; i ++) {
        slides.item(i).setAttribute('style', `transform: translateX(${this.slideTransform}%)`);
      }
    }
  }

  goToSlide(index) {
    const temp = this.slideCount - index;
    this.slideCount = index;
    this.paginationChange();
    this.slideTransform = this.slideTransform + 100 * temp;
    const slides = document.getElementsByClassName('custom-slide');
    for (let i = 0; i < slides.length; i ++) {
      slides.item(i).setAttribute('style', `transform: translateX(${this.slideTransform}%)`);
    }
  }

  paginationChange() {
    const pagination = document.querySelectorAll('.pagination-circle');
    pagination.forEach(elem => {
      if (elem.classList.contains('active-pagination')) {
        elem.classList.remove('active-pagination');
      }
    });
    document.getElementById('pagination-circle-' + this.slideCount).classList.add('active-pagination');
  }

  startInterval() {
    setInterval(() => {
      if (this.slideCount === this.data.length - 1) {
        this.goToSlide(0);
      } else {
        this.slideNext();
      }
    }, this.interval);
  }

  ngAfterViewInit(): void {
    document.getElementById('pagination-circle-' + this.slideCount).classList.add('active-pagination'); // set active class by default
  }
}
