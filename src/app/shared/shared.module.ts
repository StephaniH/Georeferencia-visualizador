import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from '../app.routes';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    FooterComponent, 
    NavbarComponent, 
    HomeComponent],
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
