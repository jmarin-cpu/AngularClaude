import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // 👉 Cambiad este valor, volved a desplegar y comprobad que se ve el cambio
  version = '1.0.0';
}
