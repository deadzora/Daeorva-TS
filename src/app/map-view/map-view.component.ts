import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import {Map, MapOptions, TileLayer, PM, Marker, Polygon} from "leaflet";
import "@geoman-io/leaflet-geoman-free";

PM.setOptIn(false);

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit, OnInit {
  @ViewChild("mapElement") el!: ElementRef;
  mapInstance!: Map;
  tileLayer!: TileLayer;

  mapOptions: MapOptions ={
    zoomControl: false,
    center: [0,0],
    zoom: 2,
    maxBounds:[[-79,-180],[79,180]]
  }

  shapes: (Polygon | Marker | L.Layer) [] = [];

  ngAfterViewInit(){
    this.setupLeaflet();
    this.setupGeoman();
    this.setupEventListeners();
  }
  setupLeaflet(){
    this.mapInstance = new Map(this.el.nativeElement, this.mapOptions);

    this.tileLayer = new TileLayer("assets/maps/{z}/{x}/{y}.png",{
      minZoom: 2,
      maxZoom: 5,
      noWrap: true,
      }
      ).addTo(this.mapInstance);
  }

  setupGeoman(){
    this.mapInstance.pm.addControls({
      position: "topleft",
      drawCircle: false,
      drawText: false,
      drawPolyline: false,
      drawCircleMarker: false,
      drawRectangle: false,
      removalMode: true,
    })
  }

  setupEventListeners(){
      this.mapInstance.on("pm:create", (e) => {
        this.shapes.push(e.layer);
  });
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
