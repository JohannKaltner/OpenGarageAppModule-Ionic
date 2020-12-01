import { Component, ViewChild, ElementRef } from "@angular/core";
import { RemoteService } from "../providers/remote-service.service";
import { Map } from "mapbox-gl";
import * as Mapboxgl from "mapbox-gl";

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
    map: Mapboxgl.Map;

    constructor(public apiService: RemoteService) {
        this.OficinasData = [];
        Object.getOwnPropertyDescriptor(Mapboxgl, "accessToken").set(
            "pk.eyJ1Ijoiam9oYW5ua2FsdG5lciIsImEiOiJja2gxdjg5NWswMzc2MnFwZnpkamd3cTNqIn0.yy9Lx1nX688XL_u3MdSVYw"
        );
    }

    private loadMap() {
        this.map = new Map({
            container: "map", // container id
            // style: 'mapbox://styles/mapbox/dark-v10',
            style: "mapbox://styles/mapbox/outdoors-v10", // stylesheet location
            center: [-43.474758, -23.028608], // starting position [lng, lat]
            zoom: 15, // starting zoom
        });
        this.map.on("load", function () {

            this.map.addControl(new Mapboxgl.NavigationControl());
            this.CreateMarker(-23.028608, -43.474758);
        });
    }

    ngOnInit() {
        this.loadMap();

    }

    CreateMarker(lgn: any, lat: any) {
        // for (var i = 0; i < this.OficinasData.length; i++) {
        //   var payload = this.OficinasData[i];
        //   this.CreateMarker(payload.longitude, payload.latitude);
        // }
        const marker = new Mapboxgl.Marker({
            draggable: true,
            headless: false
        }).setLngLat([lat, lgn])
            .addTo(this.map);

        marker.on('drag', () => {
            console.log(marker.getLngLat())
        })
    }

    // getAllWorkshops() {

    // }
}
