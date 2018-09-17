import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import FusionCharts from 'fusioncharts/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import column3d from 'fusioncharts/viz/column3d';
import pie3d from 'fusioncharts/viz/pie3d';
import Column2d from 'fusioncharts/viz/Column2d';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
FusionChartsModule.fcRoot(FusionCharts, column3d, pie3d, Column2d);
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        FusionChartsModule,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
