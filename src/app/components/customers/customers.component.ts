import { Component, ViewChild } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
//import * as moment from 'moment';

interface Customer {
  title: string;
  date: Date;
  text: string;
  image: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  givenDate: Date = new Date(); // Inicializa con la fecha de hoy
  daysBetween: number = 0;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    scrollbar: { draggable: true },
    loop: true,
  };

  customers: Customer[] = [
    {
      title: 'Oasis provides a robust synopsis of our service statuses',
      date: new Date(2022, 1, 1),
      text: `Iterative approaches to corporate strategy foster collaborative
  thinking to further the overall value proposition.`,
      image: 'assets/images/customer-1.png',
    },
    {
      title: 'Oasis has brought clarity to our architecture',
      date: new Date(2022, 3, 1),
      text: `Iterative approaches to corporate strategy foster collaborative
      thinking to further the overall value proposition.`,
      image: 'assets/images/customer-2.png',
    },
  ];

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() {
    this.daysBetween = this.calcTimeAgo(this.givenDate);
  }

  slideNext() {
    this.swiper?.swiperRef?.slideNext();
  }
  slidePrev() {
    this.swiper?.swiperRef?.slidePrev();
  }

  calcTimeAgo(date: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; // milisegundos en un día
    const today = new Date();
    const diffInTime = today.getTime() - date.getTime();
    return Math.round(diffInTime / oneDay / 365);
  }
}
