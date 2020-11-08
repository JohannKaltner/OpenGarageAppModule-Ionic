import { Component, ViewChild, ElementRef } from "@angular/core";
import { RemoteService } from "../providers/remote-service.service";
import { Map } from "mapbox-gl";
import * as mapboxgl from "mapbox-gl";

declare var google: any;

@Component({
  selector: "app-tabmap",
  templateUrl: "tabmap.page.html",
  styleUrls: ["tabmap.page.scss"],
})
export class TabMapPage {
  OficinasData: any;
  marker: any;

  @ViewChild("map", { static: false }) mapElement: ElementRef;
  map: mapboxgl.Map;

  constructor(public apiService: RemoteService) {
    this.OficinasData = [];
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(
      "pk.eyJ1Ijoiam9oYW5ua2FsdG5lciIsImEiOiJja2gxdjg5NWswMzc2MnFwZnpkamd3cTNqIn0.yy9Lx1nX688XL_u3MdSVYw"
    );
  }

  private loadMap() {
    this.map = new Map({
      message : 'Hello World!',
      container: "map", // container id
      // style: 'mapbox://styles/mapbox/dark-v10',
      style: "mapbox://styles/mapbox/outdoors-v10", // stylesheet location
      center: [-43.474758, -23.028608], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    this.map.on("load", function () {
      this.map.addLayer(
        {
          id: "customMarketid",
          source: "customMarker",
          type: "symbol",
          layout: {
            "text-field": "{message}",
            "text-size": 24,
            "text-transform": "uppercase",
            "icon-image": "marker-15",
            "text-offset": [0, 1.5],
          },
          paint: {
            "text-color": "#f16624",
            "text-halo-color": "#fff",
            "text-halo-width": 2,
          },
        },
        {
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": {
              type: "identity",
              property: "height",
            },
            "fill-extrusion-base": {
              type: "identity",
              property: "min_height",
            },
            "fill-extrusion-opacity": 0.6,
          },
        }
      );

      this.map.resize();
      this.getAllWorkshops();
      const markers = this.getMarkers();
      const data = {
        type: "FeatureCollection",
        features: markers,
      };
      
      this.map.addSource("customMarker", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      this.map.getSource("customMarker").setData(data);
      this.map.addControl(new mapboxgl.NavigationControl());
    });
  }

  ngOnInit() {
    this.loadMap();
  }

  getMarkers() {
    const geoJson = [
      {
        type: "Feature",
        geometry: {
          type: "Point",
      zoom: 15, // starting zoom
          coordinates: [-43.474758, -23.028608],
        },
        properties: {
          message: "Chennai",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-43.474758, -23.028601],
        },
        properties: {
          message: "bangulare",
        },
      },
    ];
    return geoJson;
  }

  // getAllWorkshops() {
  //   //Get saved list of students
  //   this.apiService.getList().subscribe((response) => {
  //     this.OficinasData = response;
  //   });
  // for (var i = 0; i < this.OficinasData.length; i++) {
  //   var obj = this.OficinasData[i];
  //   let myLngLat = new mapboxgl.LngLat(obj.longitude, obj.latitude);
  //   console.log(myLngLat);
  //   let marker = new mapboxgl.Marker()
  //     .setLngLat(myLngLat)
  //     .setPopup(
  //       new mapboxgl.Popup({ offset: 25 }).setHTML(
  //         "<h3>" + obj.nome + "</h3><p>" + obj.rua + "</p>"
  //       )
  //     )
  //     .addTo(this.map);
  // }
  // this.OficinasData.forEach(function (value) {
  //   this.marker = new mapboxgl.Marker()
  //       .setLngLat([value.longitude, value.Latitude])
  //      .addTo(this.map);
  // });
  //}
}
