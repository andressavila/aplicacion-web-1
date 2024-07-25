import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {

titulo ='Industrial Aceitera de Casanare';
login(){
  alert("credencailes correctas")

}

}
