import { Routes, provideRouter } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [

    {
        path: '', redirectTo:'login' , pathMatch:'full'
      },
      {
          path:'login', loadComponent:()=> import('./login/login.component')
    
      },
      {
        path:'***', loadComponent:() => import('./login/login.component')
      },

      {
       path:'dashboard', loadComponent:()=> import('./dashboard/dashboard.component'),
        children:[
          {
            path:'entradas', loadComponent:()=> import('./entradas/entradas.component'),
          },
          

          

        ]
      }

      
];
