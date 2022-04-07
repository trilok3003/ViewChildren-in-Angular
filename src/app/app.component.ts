import { AfterViewInit, Component, ElementRef, QueryList, VERSION, ViewChildren, ViewContainerRef } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>
  @ViewChildren("div") divs: QueryList<any>
  @ViewChildren(AlertComponent, { read: ElementRef }) alerts1: QueryList<ElementRef>

  @ViewChildren(AlertComponent, { read: ViewContainerRef }) alerts2: QueryList<ViewContainerRef>
  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
    this.alerts1.forEach(alertInstance => console.log(alertInstance));
    this.alerts2.forEach(alertInstance => console.log(alertInstance));
    this.divs.forEach(div => console.log(div));
  }
}
