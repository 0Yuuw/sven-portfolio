import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    const navLinks = document.querySelectorAll('.nav-link');
    const underline = document.querySelector('.underline-slider') as HTMLElement;

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        const target = e.currentTarget as HTMLElement;
        underline.style.width = `${target.offsetWidth}px`;
        underline.style.transform = `translateX(${target.offsetLeft}px)`;
        underline.style.opacity = '1';
      });

      link.addEventListener('mouseleave', () => {
        underline.style.opacity = '0';
      });
    });
  }
}
