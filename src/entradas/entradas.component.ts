import { Component } from '@angular/core';
import{MatToolbar}from '@angular/material/toolbar'

const material_desing = [MatToolbar]

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [material_desing],
  templateUrl: './entradas.component.html',
})
export default class EntradasComponent {

}
