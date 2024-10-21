import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      };

      const elementsToAnimate = document.querySelectorAll('.profile-container, .text-box');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            (entry.target as HTMLElement).style.transition = "all 1.5s ease-in-out";
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      elementsToAnimate.forEach(el => {
        observer.observe(el);
      });
    }
  }
}
