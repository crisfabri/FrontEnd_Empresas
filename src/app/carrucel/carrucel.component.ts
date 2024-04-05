// carrucel.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrucel',
  standalone: true,
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css']
})
export class CarrucelComponent implements OnInit {
  private slides: HTMLElement[] = []; // Cambio de tipo a HTMLElement[]
  private currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
    this.slides = Array.from(document.querySelectorAll('.slide')); // Convierte a array de HTMLElement
    setInterval(() => this.nextSlide(), 3000);
  }

  showSlide(index: number): void {
    this.slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(this.currentSlide);
  }
}
