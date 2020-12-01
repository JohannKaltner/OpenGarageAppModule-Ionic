import { Component, ViewChild, ElementRef } from "@angular/core";
import { RemoteService } from "../providers/remote-service.service";
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
@Component({
  selector: 'app-tabmap',
  templateUrl: 'tabmap.page.html',
  styleUrls: ['tabmap.page.scss'],
})

export class TabMapPage {
  map: Map;
  newMarker: any;
  address: string[];
  OficinasData: any;
  apiService: RemoteService;
  constructor(public plt: Platform, public router: Router) { }


  ngOnInit() {
    this.getAllWorkshops();
  }

  getAllWorkshops() {
    // Get saved list of students
    this.apiService.getList()
      .subscribe((data: any) => {
        for (let oficina of data) {
          this.OficinasData.push(oficina);
        }
      }, error => {
        console.log(error);
      })
  }

  // initMap(oficinas) {
  //   const map = new Map('map').setView([33.6396965, -84.4304574], 23);
  //   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);

  //   const customMarkerIcon = icon({
  //     iconUrl: 'assets/imgs/customMarker.png',
  //     iconSize: [64, 64],
  //     popupAnchor: [0, -20]
  //   });

  //   oficinas.forEach((oficina) => {
  //     marker([oficina.latitude, oficina.longitude], { icon: customMarkerIcon })
  //       .bindPopup(`<b>${oficina.nome}</b>`, { autoClose: false })
  //       .on('click', () => this.router.navigateByUrl('/restaurant'))
  //       .addTo(map).openPopup();
  //   });
  // }

}

