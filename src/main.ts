import { Component, LOCALE_ID } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';




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
  providers: [provideAnimationsAsync(),provideRouter(routes),provideClientHydration(),
  {provide: LOCALE_ID,
      useValue:'es'
  },
  {
    provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: 'shortDate'}
  }
 
 
  ]
});
