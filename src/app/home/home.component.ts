import { Component } from '@angular/core';
import { CarrucelComponent } from "../carrucel/carrucel.component";
import { OfertasComponent } from "../ofertas/ofertas.component";
import { CanchasComponent } from "../canchas/canchas.component";
import { LocalesComponent } from "../locales/locales.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarrucelComponent, OfertasComponent, CanchasComponent, LocalesComponent]
})
export class HomeComponent {

}
