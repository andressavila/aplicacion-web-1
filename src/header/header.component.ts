import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
 const  material_desing =[ MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatListModule]
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [material_desing, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
 
})
export class HeaderComponent {
  public empresa ='Industrial Aceitera del Casanare';
}
