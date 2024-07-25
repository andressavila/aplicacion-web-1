import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export default class LoginComponent {

constructor(private router:Router){

}

  titulo= 'Industrial Aceitera de Casanare';

  login(){
    alert("credenciales correctas");
    this.router.navigateByUrl("dashboard");
    
    
  }

}
