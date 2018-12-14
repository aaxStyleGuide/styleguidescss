import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
      'before',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/material-design-icons/image/svg/production/ic_navigate_before_48px.svg'));
    this.matIconRegistry.addSvgIcon(
      'next',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/material-design-icons/image/svg/production/ic_navigate_next_48px.svg'));
    this.matIconRegistry.addSvgIcon(
      'bike',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/material-design-icons/image/svg/production/ic_directions_bike_48px.svg'));
    this.matIconRegistry.addSvgIcon(
      'done',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/material-design-icons/action/svg/production/ic_done_48px.svg'));


  }
}
