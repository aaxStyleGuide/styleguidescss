import { Component } from '@angular/core';
import {TopMenuItems} from '../../../shared/topmenu-items/topmenu-items';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class AppHeaderComponent {

  constructor (public topMenuItems: TopMenuItems) {
  }
}
