import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Import FusionCharts library and chart modules
import FusionCharts from 'fusioncharts/core';
import Column2d from 'fusioncharts/viz/column2d';
import mscolumn2d from 'fusioncharts/viz/mscolumn2d';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
import PowerCharts from 'fusioncharts/powercharts';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Column2d, FusionTheme,PowerCharts,mscolumn2d);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
