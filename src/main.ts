import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet } from '@angular/router';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  template: `
    <router-outlet></router-outlet>
    
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()]
});
