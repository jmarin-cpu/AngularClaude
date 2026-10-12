import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Aside } from './components/aside/aside';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Aside, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
