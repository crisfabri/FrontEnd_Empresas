import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CanchasComponent } from "./canchas/canchas.component";
import { FooterComponent } from "./footer/footer.component";
import { CarrucelComponent } from "./carrucel/carrucel.component";
import { OfertasComponent } from './ofertas/ofertas.component';
import { LocalesComponent } from './locales/locales.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, CanchasComponent, FooterComponent, CarrucelComponent,OfertasComponent,LocalesComponent]
})
export class AppComponent {
  title = 'Canchas_FrontEnd';
}
