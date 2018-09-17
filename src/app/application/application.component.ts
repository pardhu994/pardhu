import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTooltip } from '@angular/material/tooltip';
import { FormGroup, FormControl, NgForm, FormBuilder } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

    probesData: any;
  response: any;
  dataSourceC1: Array<any> = [];
  dataSourceC2: Array<any> = [];
  dataSourceC3: Array<any> = [];
  dataSourceC4: Array<any> = [];
  dataSource: any;
  dataSourcec1: any;
  dataSourcec2:any;
  dataSourcec3:any;
  dataSourcec4:any;
  dataSourcec: any;
  app: any;
  applicationName: any;
  itemNumber: any = 1;
  dataItems: any;
  appName:any;
  componentResponse: any = [];
  constructor(private http: HttpClient,private route:ActivatedRoute) { }
  ngOnInit() {
    
  /**
   *code to get data from https://demo8472939.mockable.io/jsonDataoutput using HTTP Request by using app name
   *setDataLoad() is funtion to poulate the result
   * Created On:15/09/2018
   */ 
    this.appName=this.route.snapshot.paramMap.get('name');
    this.http.get('https://demo8472939.mockable.io/jsonDataoutput').subscribe(data =>{
      this.dataItems = data;
      if(this.dataItems){
        this.setDataLoad();
      }
    });
  }
  setDataLoad(){
    this.response=this.dataItems.filter((x)=>x.appName==this.appName);
    this.applicationName = this.response[0].appName;
    this.dataSourcec1 = {};
    this.componentResponse = this.response[0].component;
    if(this.componentResponse){
        for (var i = 0; i < this.componentResponse.length; i++) {
            let status1: any = 0;
            let status2: any = 0;
            for (var j = 0; j < this.componentResponse[i].probes.length; j++) {
                if (this.componentResponse[i].probes[j].status === 1) {
                    status1++;
                }
                else {
                    status2++;
                }
            }
            this.dataSourceC1.push({ 'label': 'Status1', value: status1, "color": "#4bb97f" }, { 'label': 'Status2', value: status2, "color": "#4b4b4b" });    
        }
    }
    this.dataSourcec1 = {
        "data": this.dataSourceC1
    }
  }
  /**
   *Function to get Probes for each component when user select the component
   *Created On : 16/09/2018
   */
  getComponentStats(index){
    this.dataSourceC1=[];
    // console.log(index);
    this.probesData=this.response[0].component[index].probes;
    if(this.response[0].component){
      
        for (var i = 0; i < this.response[0].component.length; i++) {
            let status1: any = 0;
            let status2: any = 0;
             for (var j = 0; j < this.probesData.length; j++) {
                if (this.probesData[j].status === 1) {
                status1++;
            }
            else {
                status2++;
            }
            } 
            this.dataSourceC1.push({ 'label': 'Status1', value: status1, "color": "#4bb97f" }, { 'label': 'Status2', value: status2, "color": "#4b4b4b" });    
        }
    }
    this.dataSourcec1 = {
        "data": this.dataSourceC1
    } 
  }
}
