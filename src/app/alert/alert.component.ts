import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() type: string = "success";
  
 
  constructor() { }

  ngOnInit() {
  }
  alert() {
    console.log("alert");
  }

}