import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

export class HeroComponent {
  heroData = {
    title: 'Wedding Day',
    date: '19 · 03 · 2026',
    names: 'Алена & Александр',
    signature: 'Дорогие друзья! С радостью приглашаем вас разделить с нами этот важный и замечательный момент образования семьи!',
    image: 'assets/couple.jpg'
  };
}
