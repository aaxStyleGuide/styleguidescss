import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  group: string;
}

const TOPMENUITEMS = [
  { state: 'typography', type: 'link', name: 'Typography', icon: 'crop_7_5', group: 'Typography' },
  { state: 'colours', type: 'link', name: 'Colours', icon: 'crop_7_5', group: 'Colours' },
  { state: 'imagery', type: 'link', name: 'Imagery', icon: 'crop_7_5', group: 'Imagery' },
  { state: 'formcomponent', type: 'link', name: 'Components', icon: 'crop_7_5', group: 'Components' },
];

@Injectable()
export class TopMenuItems {
  getMenuitem(): Menu[] {
    return TOPMENUITEMS;
  }
}
