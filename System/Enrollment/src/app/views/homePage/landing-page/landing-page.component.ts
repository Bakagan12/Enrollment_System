import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ProgramsComponent } from '../programs/programs.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../../site/login/login.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, AboutComponent, ContactDetailsComponent, ProgramsComponent, FooterComponent, CommonModule,LoginComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  currentSlideIndex: number = 0;
  images: { src: string, alt: string }[] = [
    { src: 'assets/src/img/homepage/images/logo.png', alt: 'Slide 1' },
    { src: 'assets/src/img/homepage/images/claygo.png', alt: 'Slide 2' },
    { src: 'assets/src/img/homepage/images/founders.png', alt: 'Slide 3' },
    { src: 'assets/src/img/homepage/images/SCLC.png', alt: 'Slide 4' },
    { src: 'assets/src/img/homepage/images/officers.png', alt: 'Slide 5' }
  ];
  slideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 seconds interval
  }

  nextSlide(): void {
    // Move to the next slide, wrapping around if needed
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    // Move to the previous slide, wrapping around if needed
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
