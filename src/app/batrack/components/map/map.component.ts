import {AfterViewInit, Component, HostListener} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import {FeatureGroup, LatLng, LatLngExpression} from 'leaflet';
import {FormControl} from "@angular/forms";
import "leaflet-draw";
import { saveAs } from 'file-saver';

@Component({
 selector: 'app-map',
 templateUrl: './map.component.html',
 styles: []
})


export class MapComponent implements AfterViewInit {

 private map: any;
 private waypoints: LatLng[] = [];
 private routingControl: any;
 private drawControl:any;

 coordinatedata:Array<any> = [];
 options:any;
 value: any;

 color_list : string[] = ['Blue','Red','Green','Yellow','Magento'];
 editableLayers:any
 selectedoption = 'googleSat';
 selectedoption1 = '#00FFFF';
 selectedoption2 = 'Magento';
 layer_kep :any;

 private initMap(): void {


   const tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
   maxZoom: 18,
   minZoom: 3,
   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   });

   const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
   });

   const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
   });

   const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
   });

   this.map = L.map('map', {
   center: [57.75934, 11.93927],
   zoom: 15,
   layers:[tiles,googleStreets,googleHybrid,googleSat]
   });

   let baseMaps = {
    "TilesMap": tiles,
     "googleStreetsMap": googleStreets,
     "googleHybrid": googleHybrid,
     "googleSat":googleSat
   };

   var layerControl = L.control.layers(baseMaps).addTo(this.map);

    this.editableLayers = new L.FeatureGroup();
    this.map.addLayer(this.editableLayers);

    let MyCustomMarker = L.Icon.extend({
            options: {
                shadowUrl: null,
                iconAnchor: new L.Point(12, 12),
                iconSize: new L.Point(24, 24),
                iconUrl: 'https://www.exactpredictions.in/app-assets/images/map/leaflet/customIcons/map-marker-blue.png'
            }
        });

    this.options = {
            draw: {
                polyline: {
                    shapeOptions: {
                        color: this.selectedoption1,
                        weight: 10
                    }
                },
                polygon: {
                    allowIntersection: false, // Restricts shapes to simple polygons
                    drawError: {
                        color: '#e1e100', // Color the shape will turn when intersects
                        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                    },
                    shapeOptions: {
                        color: '#bada55'
                    }
                },

                marker: {
                    icon: new MyCustomMarker(),

                }
            },
            edit: {
                featureGroup: this.editableLayers, //REQUIRED!!
                remove: true
            }
        };

        this.drawControl = new L.Control.Draw(this.options);
        this.map.addControl(this.drawControl);

        this.map.on(L.Draw.Event.CREATED, (e: { layerType: any; layer: any; }) => {
            let type = e.layerType,
                layer = e.layer;

            if (type === 'marker') {
                layer.bindPopup('A popup!');
            }

            this.editableLayers.addLayer(layer);
            console.log(this.editableLayers)
            console.log(this.editableLayers._layers[Object.keys(this.editableLayers._layers)[0]]._latlngs)

        });


 }

 constructor() {}

 // Listen for click events on the document
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    this.coordinatedata = []
    console.log(Object.keys(this.editableLayers._layers))
    Object.keys(this.editableLayers._layers).map(layernum =>{

      let data =[this.editableLayers._layers[layernum]._latlngs,this.editableLayers._layers[layernum].options.color]
      console.log(data)
      this.coordinatedata.push(data)

    })
    console.log(this.coordinatedata)
    const data = [
      { name: 'John Doe', age: 30, email: 'john@example.com' },
      { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      { name: 'Tom Brown', age: 35, email: 'tom@example.com' }
    ];

    //this.saveToLocalCsv(data, 'users');
    // You can perform actions based on the click event
  }



 ngAfterViewInit(): void {

  this.initMap();

 }





 updateWaypoints(): void {
   //this.clearMap()
   if(this.selectedoption2 == 'Blue'){
      this.drawControl.options.draw.polyline.shapeOptions.color = '#0000FF';
   }
   if(this.selectedoption2 == 'Red'){
      this.drawControl.options.draw.polyline.shapeOptions.color = '#FF0000';
   }
   if(this.selectedoption2=='Green'){
     this.drawControl.options.draw.polyline.shapeOptions.color = '#00FF00';
   }
   if(this.selectedoption2=='Yellow'){
    this.drawControl.options.draw.polyline.shapeOptions.color = '#FFFF00';
   }
   if(this.selectedoption2=='Magento'){
    this.drawControl.options.draw.polyline.shapeOptions.color = '#00FFFF';
   }
   console.log(this.selectedoption1)
   this.adddrawlayer()
   //this.mapchange()

 }

 mapchange(){

   if (this.selectedoption == 'googleStreets'){

       //this.pointmap()
       this.layer_kep[1].addTo(this.map);
     }

     if (this.selectedoption == 'tiles'){
       //this.pointmap()
       this.layer_kep[0].addTo(this.map);
     }

     if (this.selectedoption == 'googleHybrid'){
       this.pointmap()
       this.layer_kep[2].addTo(this.map);
     }

     if (this.selectedoption == 'googleSat'){
       this.layer_kep[3].addTo(this.map);
     }

 }

 adddrawlayer(){
   // FeatureGroup is to store editable layers
 }

 pointmap(){

   this.waypoints = [
     L.latLng(57.75934, 11.93927),
     L.latLng(57.6792, 11.949)
   ];

   // Clear existing route and recreate with updated waypoints

   const myPlan = new L.Routing.Plan(this.waypoints, {
       addWaypoints: false,
       createMarker: (index: number, waypoint: L.Routing.Waypoint, numberOfWaypoints: number) => {
       if (waypoint && index > -1 && index < numberOfWaypoints) {
       return L.marker(waypoint.latLng);
       }
       return false;
       }
   });

   this.routingControl = L.Routing.control({
     plan: myPlan,
     waypoints: this.waypoints
     }).addTo(this.map);

 }

  clearMap(): void {


     this.map.eachLayer((layer: any) => {
       console.log(layer)
       if (layer !== this.routingControl) {
         this.map.removeLayer(layer);
       }
     });

     if (this.routingControl) {
       this.map.removeControl(this.routingControl);
       this.routingControl = null;
     }
 }

}
