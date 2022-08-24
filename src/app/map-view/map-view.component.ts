import { Component, OnInit } from "@angular/core";
import {tileLayer} from "leaflet";
import "@geoman-io/leaflet-geoman-free";



@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  public options: any ={
    layers: [
      tileLayer('assets/maps/{z}/{x}/{y}.png', {
        minZoom: 2,
        maxZoom: 5,
        noWrap: true,
      })
    ],
    zoomControl: false,
    center: [0,0],
    zoom: 2,
    maxBounds:[[-79,-180],[79,180]]
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
