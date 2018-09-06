import { Component,OnInit } from '@angular/core';


import { FormGroup, FormControl,NgForm ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  table1:boolean=true;
  table2:boolean=true;
  table3:boolean=true;
  table4:boolean=true;
  table5:boolean=true;
  id:any;

  
  itemValue:any;
  sub:any;

tables:any=[

  {
    "id":1,
    "data":[
      {"one":25, "two":8, "three":8},
      {"one":8, "two":25, "three":8},
      {"one":8, "two":8, "three":25},
      {"one":25, "two":8, "three":8},
      
    ]
},
{
  "id":2,
  "data":[
    {"one":25, "two":2, "three":8},
    {"one":5, "two":21, "three":8},
    {"one":8, "two":8, "three":30},
    {"one":8, "two":8, "three":2}
  ]
},
{
  "id":3,
  "data":[
    {"one":2, "two":8, "three":8},
    {"one":8, "two":2, "three":9},
    {"one":8, "two":25, "three":8},
    {"one":25, "two":8, "three":2}
  ]
},
{
  "id":4,
  "data":[
    {"one":8, "two":8, "three":25},
    {"one":25, "two":8, "three":8},
    {"one":8, "two":2, "three":8},
    {"one":25, "two":8, "three":2}
  ]
},
{
  "id":5,
  "data":[
    {"one":25, "two":8, "three":56},
    {"one":25, "two":8, "three":8},
    {"one":8, "two":45, "three":8},
    {"one":25, "two":8, "three":2}
  ]
},
{
  "id":6,
  "data":[
    {"one":25, "two":2, "three":8},
    {"one":5, "two":8, "three":8},
    {"one":8, "two":8, "three":30},
    {"one":8, "two":8, "three":2}
  ]
}

]

constructor(){

  var movie1 = {
    name: 'Star Wars',
    episode: 7
  }
  

  console.log(this.tables[0].data)
 
}


dataSource = {
    "chart": {
      "xaxisname": "TIME",
      "yaxisname": "NUMBER OF PROBS",
      "theme": "fusion",
    },
    "categories": [
      {
        "category": [
          {
            "label": "2012"
          },
          {
            "label": "2013"
          },
          {
            "label": "2014"
          },
          {
            "label": "2015"
          },
          {
            "label": "2016"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "GREEN PROBS",
        "data": [
          {
            "value": "125000"
          },
          {
            "value": "300000"
          },
          {
            "value": "480000"
          },
          {
            "value": "800000"
          },
          {
            "value": "1100000"
          }
        ]
      },
      {
        "seriesname": "RED PROBS",
        "data": [
          {
            "value": "70000"
          },
          {
            "value": "150000"
          },
          {
            "value": "350000"
          },
          {
            "value": "600000"
          },
          {
            "value": "1400000"
          }
        ]
      },
      {
        "seriesname": "BLACK PROBS",
        "data": [
          {
            "value": "10000"
          },
          {
            "value": "100000"
          },
          {
            "value": "300000"
          },
          {
            "value": "600000"
          },
          {
            "value": "900000"
          }
        ]
      }
    ]
  }
  ngOnInit(){
      
    this.table1=this.tables[0].data;
    this.table2=this.tables[1].data;
    this.table3=this.tables[2].data;
    this.table4=this.tables[3].data;
    this.table5=this.tables[4].data;
   
    console.log("theres")
  // });

}
title = 'app';

dispalayItem(){
  // this.displayBlock=false;
}

submitId(){
  for (let index = 0; index < this.tables.length; index++) {
    const element = this.tables[index];
    console.log(element.id)
    if(this.itemValue == element.id){
      console.log("I AM HERE");
      console.log(element);
    //   Object.assign(element.data[0], { "statusData": "Active" });
      this.tables.splice(element, 1);
      // this.table1=[];
    }
  }

  console.log(this.tables, this.tables[1].data);
  
}

  
  deleteTable(){
    console.log(this.id);
    switch(this.id) {
      case '1':
          this.table1=false;
          break;
      case '2':
          this.table2=false;
          break;
      case '3':
          this.table3=false;
          break;
      case '4':
          this.table4=false;
          break;
      case '5':
          this.table5=false;
          break;
     
  } 
  }
}