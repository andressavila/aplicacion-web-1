import { Component, InjectionToken, LOCALE_ID,Optional,Pipe,PipeTransform, Inject } from '@angular/core';
import{MatToolbar}from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { DatePipe, formatDate } from '@angular/common';
import { DatePipeConfig } from '@angular/common';
import  localEs  from "@angular/common/locales/es";
import {  registerLocaleData} from "@angular/common";
import {MatDialogModule} from '@angular/material/dialog';


const material_desing = [MatToolbar,MatButtonModule,MatIconModule,MatTooltip,MatCardModule,MatDialogModule]

registerLocaleData(localEs)




@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [material_desing, DatePipe],
  templateUrl: './entradas.component.html',
})
export default class EntradasComponent  {


  fecha : Date= new Date();

  time : Date = new Date();



}
