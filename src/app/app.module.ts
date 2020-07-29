// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule, Route} from '@angular/router';
import { CommonModule } from "@angular/common"; //para route

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//srvicios
import {DataService} from './data.service';

//componentes
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

const routes : Route[]= [
  {path: '', component:HolaMundoComponent},
  {path: 'about',component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    //declaramos el componente
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    //lib para que funciona el *ng en route
    CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
