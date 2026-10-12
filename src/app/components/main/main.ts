import { Component, OnDestroy, signal } from '@angular/core';

interface Paso { icon: string; titulo: string; texto: string; }

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnDestroy {
  pasos: Paso[] = [
    { icon: '💻', titulo: 'Código',  texto: 'Escribimos la app en Angular.' },
    { icon: '📦', titulo: 'Build',   texto: 'ng build genera la carpeta dist/.' },
    { icon: '🐳', titulo: 'Imagen',  texto: 'Empaquetamos con Docker + Nginx.' },
    { icon: '🚀', titulo: 'Deploy',  texto: 'Publicamos en el servidor.' },
  ];

  pasoActivo = signal(0);
  hora = signal(new Date());
  visitas = signal(0);

  private timers = [
    setInterval(() => this.pasoActivo.update(p => (p + 1) % this.pasos.length), 1500),
    setInterval(() => this.hora.set(new Date()), 1000),
  ];

  sumar() { this.visitas.update(v => v + 1); }

  ngOnDestroy() { this.timers.forEach(clearInterval); }
}
