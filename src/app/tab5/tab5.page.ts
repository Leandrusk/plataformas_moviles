import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  map: L.Map | undefined;

  constructor() {}

  ngOnInit() {
    this.loadMap(); // Llama a la función para cargar el mapa
  }

  loadMap() {
    // Configura el mapa con Leaflet
    this.map = L.map('map').setView([51.505, -0.09], 13); // Coordenadas iniciales

    // Agrega el fondo del mapa desde OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // Agrega un marcador con una descripción desplegable
    const marker = L.marker([51.5, -0.09])
      .addTo(this.map)
      .bindPopup('Descripción desplegable de la ubicación')
      .openPopup();
  }
}
