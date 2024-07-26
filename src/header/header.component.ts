import { Component, DestroyRef } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher}from'@angular/cdk/layout'
import {MatMenuModule} from '@angular/material/menu';
import LoginComponent from '../login/login.component';

 const  material_desing =[ MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatListModule,MatMenuModule]
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [material_desing, RouterLink, RouterOutlet,LoginComponent],
  templateUrl: './header.component.html',
 
})
export class HeaderComponent  {
  public empresa ='Industrial Aceitera del Casanare';
  public footer ='company | Industrial Aceitera de Casanare '


  mobileQuery: MediaQueryList;

  

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1536px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  shouldRun = true



}
