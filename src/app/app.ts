import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicScreenComponent } from "./dynamic-screen-component/dynamic-screen-component";

@Component({
  selector: 'app-root',
  imports: [DynamicScreenComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Json_Forms');
}
