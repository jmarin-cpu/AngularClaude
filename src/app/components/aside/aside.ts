import { Component, signal } from '@angular/core';

interface Item { icon: string; label: string; }

@Component({
  selector: 'app-aside',
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  items: Item[] = [
    { icon: '🏠', label: 'Inicio' },
    { icon: '🐳', label: 'Docker' },
    { icon: '🌐', label: 'Nginx / Apache' },
    { icon: '⚙️', label: 'CI/CD' },
    { icon: '☁️', label: 'Cloud' },
  ];
  selected = signal(0);
}
