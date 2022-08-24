import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { FlexLayoutModule } from '@angular/flex-layout'


import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { DataPanelComponent } from './data-panel/data-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    DataPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
