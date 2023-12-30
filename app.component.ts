import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<h1>Marvellous Infosystems </h1> <h1 [class.DoColoring]="DoColoring">Marvellous Infosystems</h1>',
  
  styles: `.DoColoring
  {
    color: blue;
  }`
})
export class AppComponent {
  DoColoring = true;
}
