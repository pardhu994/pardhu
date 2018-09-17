import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashBoardComponent implements OnInit {

  res: any;
  res2: any;
  res3: any;
  dataObject: any;
  jsonDataSource: any = [];
  jsonMainData: any[];
  constructor(private http: HttpClient, private router: Router,public platformLocation: PlatformLocation) { }

  ngOnInit() {
    this.getData();

    // this.jsonMainData = mainList;
    console.log('APPname' + this.jsonMainData);
  }

  getURlData() {
    return this.http.get("https://demo8472939.mockable.io/jsonDataoutput").pipe();
  }

  getData() {
    this.getURlData().subscribe(res => {
      console.log(res);
      this.jsonDataSource = res;
      if (this.jsonDataSource) {
        this.mapData();
      }
    })

  }
  mapData() {
    this.jsonMainData = new Array();
    //this.jsonDataSource =  require('C:/Users/ADCGL9F/AppData/Local/Microsoft/Windows/INetCache/Content.Outlook/6L2VLXPA/HeatMap1000.json');
    //this.jsonDataSource=JSON.parse(JSON.stringify(this.jsonDataSource));
    var probe;
    var mainList = new Array();
    this.jsonDataSource.forEach(element => {
      var formattedResult = { appName: "", component: new Array() };

      formattedResult.appName = element.appName;

      console.log(element.component.length);
      for (var i = 0; i < element.component.length; i++) {
        probe = new Array();
        var componentId = element.component[i].id;

        for (var j = 0; j < element.component[i].probes.length; j++) {

          var index = -1;

          for (var m = 0; m < probe.length; m++) {
            if (probe[m].status == element.component[i].probes[j].status) {
              index = m;
            }
          }
          if (index != -1) {

            probe[index].count += 1;

          }
          else {

            probe.push({ status: element.component[i].probes[j].status, count: 1 });
          }

        }
        formattedResult.component.push({ id: componentId, probes: probe });



        // this.jsonMainData.push(formattedResult);
        // temp.push(new formattedResult())
      }
      this.jsonMainData.push(formattedResult);
    });
    console.log("Main data" + this.jsonMainData);
  }

  public redirectTo(appname: any) {

    var ap_pname = appname
   //code to opne router link in new window
    window.open((this.platformLocation as any).location.origin+"/#/application/"+ ap_pname, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  }
}


