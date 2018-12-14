import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  group: string;
}


const FORMMENUITEMS = [
  { state: 'formbuttons', type: 'link', name: 'Form Buttons', icon: 'crop_7_5', group: 'Components' },
  { state: 'tables', type: 'link', name: 'Tables', icon: 'crop_7_5', group: 'Components' },
  { state: 'inputs', type: 'link', name: 'Inputs', icon: 'crop_7_5', group: 'Components' },
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5', group: 'Components' },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web', group: 'Components' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode', group: 'Components' },
  { state: 'shadows', type: 'link', name: 'Shadows', icon: 'web', group: 'Components' },
  { state: 'cards', type: 'link', name: 'Cards', icon: 'developer_mode', group: 'Components' },

];

const TYPOMENUITEMS = [
  { state: 'titles', type: 'link', name: 'Titles', icon: 'crop_7_5' , group: 'Typography' },
  { state: 'paragraph', type: 'link', name: 'Paragraph', icon: 'crop_7_5' , group: 'Typography' },
];


const COLOURMENUITEMS = [
  { state: 'colourpalette', type: 'link', name: 'Colour Palette', icon: 'crop_7_5', group: 'Colours' },
  { state: 'colours', type: 'link', name: 'Colours', icon: 'crop_7_5', group: 'Colours' },
];

const IMAGERYMENUITEMS = [
  { state: 'photos', type: 'link', name: 'Photos', icon: 'crop_7_5', group: 'Imagery' },
  { state: 'logos', type: 'link', name: 'Logos', icon: 'crop_7_5', group: 'Colours' },
];


@Injectable()
export class MenuItems {
  getMenuitem(name: string): Menu[] {
    console.log(name);
    switch (name) {
      case 'formcomponent': {
        return FORMMENUITEMS;
        break;
      }
      case 'typography': {
        return TYPOMENUITEMS;
        break;
      }
      case 'imagery': {
        return IMAGERYMENUITEMS;
        break;
      }
      case 'formbuttons': {
        return FORMMENUITEMS;
        break;
      }
      case 'tables': {
        return FORMMENUITEMS;
        break;
      }
      case 'inputs': {
        return FORMMENUITEMS;
        break;
      }
      case 'button': {
        return FORMMENUITEMS;
        break;
      }
      case 'stepper': {
        return FORMMENUITEMS;
        break;
      }
      case 'slider': {
        return FORMMENUITEMS;
        break;
      }
      case 'titles': {
        return TYPOMENUITEMS;
        break;
      }
      case 'paragraph': {
        return TYPOMENUITEMS;
        break;
      }
      case 'colourpalette': {
        return COLOURMENUITEMS;
        break;
      }
      case 'colours': {
        return COLOURMENUITEMS;
        break;
      }
      case 'photos': {
        return IMAGERYMENUITEMS;
        break;
      }
      case 'logos': {
        return IMAGERYMENUITEMS;
        break;
      }
      default: {
        return FORMMENUITEMS;
        break;
      }
    }
  }
}

